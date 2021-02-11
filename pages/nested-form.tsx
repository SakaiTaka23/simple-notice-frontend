import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';

type FormInputs = {
  listName: string;
  table: {
    rows: {
      firstName: string;
      lastName: string;
    }[];
  };
};
const defaultValues: FormInputs = {
  listName: '',
  table: {
    rows: [
      { firstName: ' ', lastName: ' ' },
      { firstName: ' ', lastName: ' ' },
    ],
  },
};

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];
type TableRows = ArrayElement<FormInputs['table']['rows']>;

const ReactHookFormPart: React.FC = () => {
  const methods = useForm<FormInputs>({ defaultValues });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <>
      <h2>React Hook Form array</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ArrayInput />
          <button type='submit'>submit</button>
        </form>
      </FormProvider>
    </>
  );
};

// 子コンポーネント
const name = 'table.rows';
const ArrayInput: React.FC = () => {
  // hook利用時に型を指定する必要はあるが、型定義ができる
  const { control, register } = useFormContext<FormInputs>();
  // useFieldArrayでは配列の要素の型を指定する
  const { fields, append } = useFieldArray<TableRows>({
    control,
    // name(table.rows)を指定することで,fieldsにtable.rowsの値が入る
    name,
  });

  const list = fields.map((item, index) => (
    <div key={item.id}>
      <input
        name={`${name}[${index}].firstName`}
        // registerはregister()としてmap内で実行する必要がある
        ref={register()}
        // itemも型定義されている
        defaultValue={item.firstName}
      />
      <input name={`${name}[${index}].lastName`} ref={register()} defaultValue={item.lastName} />
    </div>
  ));

  return (
    <>
      {list}
      <button
        type='button'
        //  appendの引数も型定義されている
        onClick={() => append({ firstName: 'tanaka', lastName: 'saburo' })}
      >
        add at last
      </button>
    </>
  );
};

export default ReactHookFormPart;

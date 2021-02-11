import React, { FC } from 'react';
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';

type FormInputs = {
  title: string;
  description: string;
  owner: string;
  questions: {
    title: string;
    type: 'text' | 'radio' | 'check';
    answers: string[];
  }[];
};

type Question = {
  title: string;
  type: 'text' | 'radio' | 'check';
  answers: string[];
};

const defaultValues: FormInputs = {
  title: 'title',
  description: 'desc',
  owner: 'owner',
  questions: [],
};

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];
type Rows = ArrayElement<FormInputs['questions']>;

const Nested: FC = () => {
  const methods = useForm<FormInputs>({ defaultValues });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <>
      <h2>nested form</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ArrayInput />
        </form>
      </FormProvider>
    </>
  );
};

const name = 'questions';
const ArrayInput: FC = () => {
  const { control, register } = useFormContext<FormInputs>();
  const { fields, append } = useFieldArray<Rows>({
    control,
    name,
  });

  const list = fields.map((item, index) => {
    <div key={item.id}>
      <input type='text' name={`${name}[${index}].value`} ref={register()} />
    </div>;
  });

  return (
    <>
      {list}
      <button
        type='button'
        //  appendの引数も型定義されている
        onClick={() => append({})}
      >
        add at last
      </button>
    </>
  );
};

export default Nested;

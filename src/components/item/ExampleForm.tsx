import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export default function ExampleForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <ExampleFormStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName")} />
          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
        <div className="render">
            Render
        </div>
    </ExampleFormStyled>
  );
}

const ExampleFormStyled = styled.div`
    background: rgba(100,149,237, 0.5);
    
    .render
    {
        border: 1px solid red;
    }
`;

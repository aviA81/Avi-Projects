import { useState } from "react";

export default function useForm(initialValues) {
  const [state, setState] = useState(initialValues);

  return [
    state,
    //setState
    e => setState({
      ...state,
      [e.target.name]: e.target.value
    })
  ];
}

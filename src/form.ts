export const formData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input");

  let values: { [prop: string]: string } = {};

  inputs.forEach(i => (values[i.id] = i.value));

  return values;
};

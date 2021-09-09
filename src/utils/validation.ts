export function validaEmail(email: string): boolean {
  let validate = true;
  const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
  if (!email.toLowerCase().match(formatEmail)) {
    validate = false;
  }
  return validate;
}

export function validaCpf(cpf: string): boolean {
  let validate = true;
  const padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpf.toLowerCase().match(padraoCPF)) {
    validate = false;
  }
  return validate;
}
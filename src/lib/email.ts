const brand /* : unique symbol */ = Symbol();
type brand = typeof brand;
type Branded<T, B> = T & { [K in brand]: B };

type email = Branded<string, 'email'>;

function isEmail(maybeEmail: string): maybeEmail is email {
  return maybeEmail.includes('@');
}

export function assertIsEmail(maybeEmail: string): email | null {
  if (!isEmail(maybeEmail)) return null;
  return maybeEmail;
}

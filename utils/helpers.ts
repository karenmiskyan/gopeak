export const validateEmail = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

export const dateFormatter = (inputDateString: string) =>  {

  const inputDate = new Date(inputDateString);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it is zero-based
  const day = inputDate.getDate().toString().padStart(2, '0');

  return  `${year}-${month}-${day}`;
}
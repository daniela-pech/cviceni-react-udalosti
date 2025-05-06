/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const upozorneni = () => {
    alert('Ahoj!');
  };
  return <button onClick={upozorneni}>Ukaž bublinu</button>;
};

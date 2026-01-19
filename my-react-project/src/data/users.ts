import pic1 from "../assets/pic.jpg"

export type user = {
    id: number;
    name: string;
    username: string;
    src: string;
}

export const users:user[] = [
  { id: 1, name: "Иван Иванов", username: "@ivanov1", src: pic1 },
  { id: 2, name: "Пётр Петров", username: "@petrov2", src: pic1 },
  { id: 3, name: "Сергей Сергеев", username: "@sergeev3", src: pic1 },
  { id: 4, name: "Алексей Алексеев", username: "@alekseev4", src: pic1 },
  { id: 5, name: "Николай Николаев", username: "@nikolaev5", src: pic1 },
  { id: 6, name: "Дмитрий Дмитриев", username: "@dmitriev6", src: pic1 },
  { id: 7, name: "Владимир Владимиров", username: "@vladimirov7", src: pic1 },
  { id: 8, name: "Андрей Андреев", username: "@andreev8", src: pic1 },
  { id: 9, name: "Евгений Евгеньев", username: "@evgeniev9", src: pic1 },
  { id: 10, name: "Михаил Михайлов", username: "@mikhailov10", src: pic1 },
  { id: 11, name: "Юрий Юрьев", username: "@yuriev11", src: pic1 },
  { id: 12, name: "Виктор Викторов", username: "@viktorov12", src: pic1 },
  { id: 13, name: "Артём Артёмов", username: "@artemov13", src: pic1 },
  { id: 14, name: "Игорь Игорев", username: "@igorev14", src: pic1 },
  { id: 15, name: "Константин Константинов", username: "@konstantinov15", src: pic1 },
];
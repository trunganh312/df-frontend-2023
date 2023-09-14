const modal = document.querySelector(".modal");
const btnAddBook = document.querySelector(".btn-them");
const btnSaveBook = document.querySelector(".btn-add");
const btnCloseModal = document.querySelector(".btn-close");
const btnDeleteBook = document.querySelector(".btn-delete");
const form = document.querySelector(".form");

btnAddBook.addEventListener("click", () => {
  modal.classList.add("active");
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

const renderBookList = (bookList) => {
  const table = document.querySelector("#customers");
  const html3 =
    " <tr><th>Tiêu đề</th><th>Tác giả</th><th>Chủ đề</th><th>Thao tác</th></tr>";
  const html = bookList.map((book) => {
    return `<tr>
    <td>${book.title}</td>
    <td>${book.tacgia}</td>
    <td>${book.chude}</td>
    <td>
      <button class="btn btn-primary btn-delete"  
      onclick="handleDeleteBook(${book.id})">Delete</button>
    </td>
  </tr>`;
  });
  const html2 = html3 + html.join("");
  table.innerHTML = html2;
};

const bookList = [
  { title: "Book 1", tacgia: "Author 1", chude: "Category 1", id: 1 },
  { title: "Book 2", tacgia: "Author 2", chude: "Category 2", id: 2 },
];

renderBookList(bookList);

const addBook = () => {
  const date = Date.now();
  const title = document.querySelector("input[name='title']").value;
  const tacgia = document.querySelector("input[name='tacgia']").value;
  const chude = document.querySelector("input[name='chude']").value;
  const bookItem = { title, tacgia, chude, id: date };
  if (title === "" || tacgia === "" || chude === "") {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  } else {
    bookList.push(bookItem);
    // localStorage.setItem("bookList", JSON.stringify(bookList));
    renderBookList(bookList);
    modal.classList.remove("active");
  }
};

btnSaveBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});

const searchWithBook = () => {
  const valueInputSearch = document.querySelector(".search__input").value;
  const nameBook = bookList.filter((book) => {
    return book.title.toLowerCase().includes(valueInputSearch.toLowerCase());
  });
  renderBookList(nameBook);
};

const handleDeleteBook = (id) => {
  const bookNewList = [...bookList].filter((book) => book.id !== Number(id));
  //   localStorage.setItem("bookList", JSON.stringify(bookNewList));
  renderBookList(bookNewList);
};

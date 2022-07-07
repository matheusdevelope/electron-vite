function App() {
  let base64_to_imgsrc =
    "iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKwSURBVO3BQa7jSAwFwXyE7n/lHC+5KkCQ7OlPMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+CWVJ5LQqZwk4ZdUnijWKMUapVijXLxM5U1JuCMJnUqn8oTKm5LwpmKNUqxRijXKxZcl4Q6VO5JwkoQTlSeScIfKNxVrlGKNUqxRLoZT6ZLQJaFT+cuKNUqxRinWKMUapVijFGuUYo1y8WUqv6TSJaFT6ZLwhMq/pFijFGuUYo1y8bIkTJaEf1mxRinWKMUaJX7whyXhTSp/WbFGKdYoxRrl4qEkdCpdEt6k0qmcJKFT6ZJwkoQ3qXxTsUYp1ijFGuXiIZUTlS4JncodSehUuiS8SaVLQqfSJeGOJHQqTxRrlGKNUqxR4gcvSkKn0iXhRKVLQqfSJeEJlS4JncpJEp5QeVOxRinWKMUaJX7woiScqDyRhE7lJAmdyhNJeELlm4o1SrFGKdYo8YMHktCpdEn4JZWTJHQqXRI6lZMknKh0SehU3lSsUYo1SrFGiR/8YUk4UemS8CaVkyTcofJEsUYp1ijFGuXioST8kkqn0iWhS0Kn0iWhU+mScEcSOpUuCZ3Km4o1SrFGKdYoFy9TeVMSTpJwotIl4SQJJyp3JKFT6ZLQqTxRrFGKNUqxRrn4siTcofJNKl0SOpWTJHQqJypdEjqVNxVrlGKNUqxRLoZR+SaVLgknSehUvqlYoxRrlGKNcjFMEjqVLgmdSpeETqVLQqdykoRfKtYoxRqlWKNcfJnKN6ncoXKicqJykoT/U7FGKdYoxRrl4mVJ+KUkdCpdEk5UuiR0KneonCShU3lTsUYp1ijFGiV+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKf3weEuTKsbeUAAAAAElFTkSuQmCC";
  return (
    <div>
      QrCode
      <img src={`data:image/png;base64,` + base64_to_imgsrc} />
    </div>
  );
}

export default App;

// const setButton: any = document.getElementById("btn");
// const titleInput: any = document.getElementById("title");
// const imagem: any = document.getElementById("imagemqr");
// const win: any = window;
// setButton.addEventListener("click", async () => {
//   // const title = titleInput.value;
//   // const Qr = await win.electronAPI.GenerateQrCode(title);
//   // imagem.src = Qr;
//   imagem.src =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKwSURBVO3BQa7jSAwFwXyE7n/lHC+5KkCQ7OlPMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+CWVJ5LQqZwk4ZdUnijWKMUapVijXLxM5U1JuCMJnUqn8oTKm5LwpmKNUqxRijXKxZcl4Q6VO5JwkoQTlSeScIfKNxVrlGKNUqxRLoZT6ZLQJaFT+cuKNUqxRinWKMUapVijFGuUYo1y8WUqv6TSJaFT6ZLwhMq/pFijFGuUYo1y8bIkTJaEf1mxRinWKMUaJX7whyXhTSp/WbFGKdYoxRrl4qEkdCpdEt6k0qmcJKFT6ZJwkoQ3qXxTsUYp1ijFGuXiIZUTlS4JncodSehUuiS8SaVLQqfSJeGOJHQqTxRrlGKNUqxR4gcvSkKn0iXhRKVLQqfSJeEJlS4JncpJEp5QeVOxRinWKMUaJX7woiScqDyRhE7lJAmdyhNJeELlm4o1SrFGKdYo8YMHktCpdEn4JZWTJHQqXRI6lZMknKh0SehU3lSsUYo1SrFGiR/8YUk4UemS8CaVkyTcofJEsUYp1ijFGuXioST8kkqn0iWhS0Kn0iWhU+mScEcSOpUuCZ3Km4o1SrFGKdYoFy9TeVMSTpJwotIl4SQJJyp3JKFT6ZLQqTxRrFGKNUqxRrn4siTcofJNKl0SOpWTJHQqJypdEjqVNxVrlGKNUqxRLoZR+SaVLgknSehUvqlYoxRrlGKNcjFMEjqVLgmdSpeETqVLQqdykoRfKtYoxRqlWKNcfJnKN6ncoXKicqJykoT/U7FGKdYoxRrl4mVJ+KUkdCpdEk5UuiR0KneonCShU3lTsUYp1ijFGiV+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKf3weEuTKsbeUAAAAAElFTkSuQmCC";

//   // window.electronAPI.setTitle(title);
// });
// win.electronAPI.openQr("new-qrcode", (qrcode: any) => {
//   imagem.src = qrcode;
// });
// win.electronAPI.closeQr("clean-qrcode", (qrcode: any) => {
//   imagem.src = "";
// });
// export {};

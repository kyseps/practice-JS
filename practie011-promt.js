let signUp = confirm("ایا قصد ثبت نام دارید؟");

if (signUp) {
  let firstName = prompt("نام خود را وارد کنید");
  let lastName = prompt("نام خانوادگی خود را وارد کنید");
  let pass = prompt("رمز عبور خود را وارد کنید");
  let age = +promt("سن خود را وارد کنید");

  if (age < 18) {
    alert("شما به سن قانونی نرسیدی");
  } else if (pass.length < 6) alert("رمز باید بیشتر از 6 کاراکتر باشد");
}

if (firstName && lastName && pass && age) {
  window.alert(
    `signup succesfull! your name : ${firstName} ${lastName} password : ${pass} age:${age} please keep your info safe`
  );
} else if (!firstName) {
  window.alert("نامی وارد نشد");
} else if (!lastName) {
  alert("نام خانوادگی وارد نشد");
} else if (pass.length < 6) {
  alert("بیشتر از شش ");
}

function Man(name, surname) {
    this._name = name;
    this._surname = surname;
    this.about = function () {
      document.write('Имя: ' + this._name + ' Фамилия: ' + this._surname);
    };
 }
 
 let man = new Man("Вася", "Петров");
 man.about(); // Имя: Вася Фамилия: Петров
 document.write("<br>");
 function Student(name, surname, school) {
    Man.apply(this, arguments); // передаем аргументы name и surname родителю
    this._school = school; // school - аргумент только для Student
 
    let parentAbout = this.about; // сохраняем метод родителя
 
    this.about = function () { // изменяем метод родителя
      parentAbout.call(this); // вызываем метод родителя, передавая ему this
      document.write('Учебное заведение: ' + this._school); // дописываем свои действия
    }
 }
 
 let student = new Student("Вася", "Петров", "ХНУРЕ");
 student.about(); // Имя: Вася Фамилия: Петров Учебное заведение: ХНУРЕ
 document.write("<br>");

 function Employee(name,surname, job) {
   Man.apply(this, arguments);
   this._job = job;
   let parentAbout2 = this.about;
   this.about = function() {
     parentAbout2.call(this);
     document.write('Место работы: ' + this._job);
   }
 }
 let employee = new Employee('Вася', 'Петров', 'Страховая компания');
 employee.about();
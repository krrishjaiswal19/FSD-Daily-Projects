let student = {
  name: "Aman",
  marks: {
    maths: 70,
    english: 65,
    science: 75
  },

  total: function () {
    return this.marks.maths + this.marks.english + this.marks.science;
  },

  percentage: function () {
    return this.total() / 3;
  },

  result: function () {
    return this.percentage() >= 40 ? "Pass" : "Fail";
  }
};

console.log("Name:", student.name);
console.log("Total:", student.total());
console.log("Percentage:", student.percentage());
console.log("Result:", student.result());

const codes = {
  chars: {
    upArrow: "\u001b[A",
    downArrow: "\u001b[B",
    leftArrow: "\u001b[C",
    rightArrow: "\u001b[D",
  },
  codes: {
    up: "\x1b[A", // \033[A
    down: "\n",
    begin: "\r",
    upBegin: "\x1b[F", // \033[F
  },
};

export default codes;

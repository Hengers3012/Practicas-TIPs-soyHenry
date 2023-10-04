function HasBalancedBrackets(string) {
  const stackData = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (brackets[bracket]) {
      stackData.push(bracket);
    } else if (bracket === "}" || bracket === ")" || bracket === "]") {
      const lastBracket = stackData.pop();
      if (bracket !== brackets[lastBracket]) {
        return false;
      }
    }
  }

  return stackData.length === 0;
}



module.exports = HasBalancedBrackets;

console.log(HasBalancedBrackets("{}"))//(true);
console.log(HasBalancedBrackets("[]"))//(true);
console.log(HasBalancedBrackets("{[]()}"))//(true);
console.log(HasBalancedBrackets("{[(])}"))//(false);
console.log(HasBalancedBrackets("{[("))//(false);
console.log(HasBalancedBrackets("{[([{()[]{}}])]}"))//(true);
console.log(HasBalancedBrackets("[[][]]"))
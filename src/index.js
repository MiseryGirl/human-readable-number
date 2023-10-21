module.exports = function toReadable(number) {
  let result = '';
  if (number == 0) {
    return 'zero'
  }
  if (number >= 100) {
    switch (Math.floor(number / 100)) {
      case 1:
        result += 'one hundred ';
        break;
      case 2:
        result += 'two hundred ';
        break;
      case 3:
        result += 'three hundred ';
        break;
      case 4:
        result += 'four hundred ';
        break;
      case 5:
        result += 'five hundred ';
        break;
      case 6:
        result += 'six hundred ';
        break;
      case 7:
        result += 'seven hundred ';
        break;
      case 8:
        result += 'eight hundred ';
        break;
      case 9:
        result += 'nine hundred ';
        break;
    }
    number %= 100;
  }
  if (number >= 20 && number < 100) {
    switch (Math.floor(number / 10)) {
      case 2:
        result += 'twenty ';
        break;
      case 3:
        result += 'thirty ';
        break;
      case 4:
        result += 'forty ';
        break;
      case 5:
        result += 'fifty ';
        break;
      case 6:
        result += 'sixty ';
        break;
      case 7:
        result += 'seventy ';
        break;
      case 8:
        result += 'eighty ';
        break;
      case 9:
        result += 'ninety ';
        break;
    }
    number %= 10;
  }
  if (number >= 10 && number < 20) {
    switch (number % 10) {
      case 0:
        return result += 'ten';
      case 1:
        return result += 'eleven';
      case 2:
        return result += 'twelve';
      case 3:
        return result += 'thirteen';
      case 4:
        return result += 'fourteen';
      case 5:
        return result += 'fifteen';
      case 6:
        return result += 'sixteen';
      case 7:
        return result += 'seventeen';
      case 8:
        return result += 'eighteen';
      case 9:
        return result += 'nineteen';
    }
  }
  if (number < 10) {
    switch (number) {
      case 1:
        return result += 'one';
      case 2:
        return result += 'two';
      case 3:
        return result += 'three';
      case 4:
        return result += 'four';
      case 5:
        return result += 'five';
      case 6:
        return result += 'six';
      case 7:
        return result += 'seven';
      case 8:
        return result += 'eight';
      case 9:
        return result += 'nine';
    }
  }
  if (number == 0) {
    result = result.trim();
  }
  console.log(result);
  return result
}
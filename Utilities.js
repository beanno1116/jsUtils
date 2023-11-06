
/**
 * An object contains a list of the 50 US states
 * full name
 */
export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

/**
 * Method that capatilzes only the first character
 * of the first word of the passed string
 * 
 * @param {String} str 
 * @returns {String}
 */
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Method that capatilzes the first character
 * of the all words in the passed string
 * 
 * @param {String} str 
 * @returns {String}
 */
export const capitalizeEachFirstLetter = (str) => {
  let strArr = str.split(" ");
  strArr.forEach(str => {
    capitalizeFirstLetter(str);
  });
  return strArr.join(" ");
}

export const formatCurrency = (value) => {

}

/**
 * Method accepts a string, char,int,float and truncates
 * the value to 2 decimal points and returns a string
 * formatted with a US dollar sign ($) EX: $x.xx
 * 
 * @param {*} value 
 * @returns {String} $x.xx
 */
export const currencyFormatter = value => {
  let val = parseFloat(value).toFixed(2)
  return `$${val}`;
}

/**
 * Method accepts a string, char,int,float and truncates
 * the value to 2 decimal points and returns a string
 * formatted with the locale currrency symbol and seperator
 * 
 * @param {*} value 
 * @returns {String} $x.xx
 */
export const currencyFormatterLocale = value => {
  let val = parseFloat(value).toFixed(2)
  return `$${val}`;
}


/**
 * Creates a new FormData() object and appends
 * the items from the @param formData object 
 * and then returns the FormData object; Used
 * when creating a fetch request with params
 * 
 * @param {String} action 
 * @param {Object} formData 
 * @returns {Object} FormData object
 */
export const createFormDataObj = (formData) => {
  const fd = new FormData();
  const debugArr = [];
  for (const key in formData) {
    if (Object.hasOwnProperty.call(formData, key)) {
      const item = formData[key];
      debugArr.push(item);
      fd.append(key, item);
    }
  }
  console.log(debugArr);
  return fd;
}


export const apiDataFetch = (_url, _options, _responseType = "json") => {
  async function fetchData(_url, _options) {
    try {
      const res = await fetch(_url, _options);
      const json = await res.text();
      return json;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  return fetchData(_url, _options);
}


/**
 * Method to create a unique id string of characters with the 
 * ability to add a prefix to to the uid
 * 
 * @param {String} prefix 
 * @returns {String} 
 */
export const uid = (prefix) => {
  return prefix ?
    `${prefix}-${Date.now().toString(36) + Math.random().toString(36).slice(2)}` :
    `${Date.now().toString(36) + Math.random().toString(36).slice(2)}`;
}


export const uuid = (prefix) => {
  var text = prefix || "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";

  for (var i = 0; i < 64; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


export const stringWidth = (_string, _font) => {
  const canvas = stringWidth.canvas || (stringWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = _font;
  const metrics = context.measureText(_string);
  return metrics.width;
}


export const getElementCssProperty = (_ele, _prop) => {
  return window.getComputedStyle(_ele, null).getPropertyValue(_prop);
}


export const getElementFont = (_ele = document.body) => {
  const fontWeight = getElementCssProperty(_ele, 'font-weight') || 'normal';
  const fontSize = getElementCssProperty(_ele, 'font-size') || '16px';
  const fontFamily = getElementCssProperty(_ele, 'font-family') || 'Times New Roman';
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}

/**
 * A method for creating a deep copy of an object and its properties
 * 
 * @param {*} obj 
 * @param {*} hash 
 * @returns 
 */
export const deepCopy = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (obj[key] && typeof obj[key] === "object") {
      cloneObj[key] = deepCopy(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

/**
 * A method that creates a random number between the min and the max parameters
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


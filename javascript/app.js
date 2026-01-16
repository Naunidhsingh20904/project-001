// // const URL =
// // thte fetch api provides an interfave for fetching resources
// the fetch() method is used to fetch a resoource.a
// let promise = fetch (url, [options])

const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const getfacts = async () => {
  console.log("getting data");
  let response = await fetch(URL);
  console.log(response); // json formst
};

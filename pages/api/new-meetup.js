//api routes: has 2b in  pages/api dir
//each file is an api route
//no 'view' code is written, only server side code can be written.
//secure folder, creds can also be used here.

const handler = (req, res) => {
  const data = req.body;
  const { title, image, address, description } = data;
};

//req,res works same as express
export default handler;

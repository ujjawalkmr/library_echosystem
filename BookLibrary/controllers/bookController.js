const Book = require("../models/bookModel")

// Add Book
exports.addBook = async (req,res) => {

 try{

 const {title,author,tags,status,userId} = req.body;

 const book = await Book.create({
  title,
  author,
  tags,
  status,
  userId:userId
 }); 

 res.status(200).json({book, message:"SUCCESS"});

 }catch(error){
  res.status(500).json({message:error.message});
 }

}


// Get Books
exports.getBooks = async (req,res) => {
console.log("id is :",req.userId);
 try{
    
 const books = await Book.find({userId:req.userId});

 if(!books){
 res.status(201).json({books, message:"SUCCESS"});
 }

 res.status(200).json({books, message:"SUCCESS"});

 }catch(error){
  res.status(500).json({message:error.message})
 }

}


// Update Book
exports.updateBook = async (req,res) => {

 try{
 const book = await Book.findById(req.params.id);
 if(!book){
  return res.status(404).json({message:"Book not found"});
 }

 if(book.userId.toString() !== req.userId){
  return res.status(403).json({message:"Not allowed to update"});
 }
 const updatedBook = await Book.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );

 res.status(200).json({updatedBook,message:"SUCCESS"});

 }catch(error){
  res.status(500).json({message:error.message})
 }

}


// Delete Book
exports.deleteBook = async (req,res) => {

 try{

 const book = await Book.findById(req.params.id);

 if(book.userId.toString() !== req.userId){
  return res.status(403).json({message:"Not allowed to delete"});
 }

 await book.deleteOne();

 res.status(200).json({message:"SUCCESS"});

 }catch(error){
  res.status(500).json({message:error.message});
 }

}

exports.filterBooks = async (req, res) => {
  try {
    const { tags, status } = req.body; 
    const query = {};

  if (tags && tags.length > 0) {
      query.tags = { $in: tags }; 
    }
    if (status) {
      query.status = status;  
    }

    const books = await Book.find(query);

    res.status(200).json({ books, message: "Filtered books fetched successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

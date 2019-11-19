var express = require('express');
var router = express.Router();




// PRE ROUTE MIDDLEWARE - check if user has authenticated cookie

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
});																	//		|
// 		 ------------------------------------  
//     | 
//     V

router.get("/main", (req, res, next) => {
  res.render("logged/main");
});

router.get("/private", (req, res, next) => {
  res.render("logged/private");
});



module.exports = router;
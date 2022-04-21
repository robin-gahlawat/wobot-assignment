
In this assignment,                                                                                                               
 -> Authentication system is done using passport package, and passwords are stored using bcrypt.                                    
 -> Users have to first login to access rest of features like userlist, userdetails, uploading product data, product details.           


1. Signup

    URL(POST) :    localhost:3003/user/signup                                                                                   
    body format (JSON) : 
                        {
                            "firstname": "p",
                            "lastname": "abc",
                            "username": "user4",
                            "password": "123"
                        } 

2. Login 

    URL(POST) : localhost:3003/user/login                                                                                           
    body format : 
                    {
                        "username": "admin1",
                        "password": "123"
                    }

3. Fetching user list

    URL(GET):   localhost:3003/user/list

4. Fetchign user details

    URL(GET): localhost:3003/user/userinfo                                                                                                      
    body format : 
                    {
                        "username": "admin1"
                    }

5. Uploading products

    URL(POST):   localhost:3003/prod/uploadproducts                                                                                                         
    body format :  
                    {
                        "name": "hp",
                        "desc": "music",
                        "quantity": "15",
                        "price": "1800",
                        "createdBy": "Robin"
                    }


6. Product List

    URL(GET):   localhost:3003/prod/productlist

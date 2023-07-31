//========== User's Code Starts Here ========== 

const blogs = [];

//Do not touch these functions below at all function 

function create1stBlog() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            blogs.push({ title: 'BLOG1' });

            resolve();

        }, 3000)
    })
};
//Do not touch these functions below at all function 
function create2ndBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push({ title: 'BLOG2' });
            resolve()
        }, 2000)
    })
};

function deleteBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (blogs.length > 0) {
                const deletedBlog = blogs.pop();
                resolve(deletedBlog.title);
            } else {
                reject(new Error('ERROR'));
            }
        }, 1000);
    });
}
//Call the function in the right way so that we can get the desired output 
create1stBlog()
    .then(() => {
        return create2ndBlog();
    })
    .then(() => {
        return deleteBlog();
    })
    .then((deletedBlog) => {
        console.log(deletedBlog);
        // Print BLOG2 
        return deleteBlog();
    })
    .then((deletedBlog) => {
        console.log(deletedBlog);
        // Print BLOG1 
        return deleteBlog();
    })
    .then((deletedBlog) => {
        console.log(deletedBlog);
        // Print ERROR: ARRAY IS EMPTY 
    })
    .catch((error) => {
        console.log(error.message);
        // Handle the error if the promise is rejected 
    });
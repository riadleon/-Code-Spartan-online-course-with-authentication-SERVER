const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const Courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});


app.get('/courses', (req, res) => {
    res.send(Courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = Courses.find(c => c.id === id);
    res.send(selectedCourses);
});








app.listen(port, () => {
    console.log(`Code Spartans Server running on port, ${port}`);
})
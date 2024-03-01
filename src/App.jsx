
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import webdevelopment from './images/webdevelopment.jpg';
import elearning from './images/elearning.jpg';
import udemy from './images/udemy.jpg';





function App() {
  // Define your array of card data here
  const cardsData = [
    {
      id: 1,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 2,
      title: "MIT OpenCourseWare | Free Online Course Materials",
      imageUrl: elearning, 
      readMoreUrl: "https://ocw.mit.edu/",
    },  
    {
      id: 3,
      title: "Free Programming Fundamentals Courses and Tutorials",
      imageUrl: udemy, 
      readMoreUrl: "https://www.udemy.com/topic/programming-fundamentals/free/",
    },  
    {
      id: 4,
      title: "5 great educational sources for software engineers",
      imageUrl: "https://images.unsplash.com/photo-1565462905102-140e712045aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlc3xlbnwwfHwwfHx8MA%3D%3D", 
      readMoreUrl: "https://vacuumlabs.com/5-great-educational-sources-for-software-engineers/",
    },  
    {
      id: 5,
      title: "Best software engineering blogs, YouTube channels, and more",
      imageUrl: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D", 
      readMoreUrl: "https://www.galvanize.com/blog/best-software-engineering-blogs-books-youtube-channels/",
    },  
    {
      id: 6,
      title: "CodePath Programing Courses",
      imageUrl: "data:image/jpeg;base64,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", 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiHnqmlqtKEAxXBk1oFHd5uBZEYABADGgJ2dQ&ase=2&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkIRQ4_cUKukaRDXfUMqbPui3fvyYfwV1Giogfi0pEMYzUyrO9uZLQAaAkk1EALw_wcB&ohost=www.google.com&cid=CAESV-D2wZB4RqZOzvShBEXSi0mgDEUIyJMVudOyIg2em1kkcS2-vNkKnGagU3a043br1FlGZbhME74BzH9b7P8qpUbqEmzwQohd9JkY4Vvmz1-4XvX3FHUNFA&sig=AOD64_3syZZLuruZYrkL4boy9PfAKgA35A&q&nis=4&adurl&ved=2ahUKEwi4uqOlqtKEAxXmRzABHZkKAP8Q0Qx6BAgHEAE",
    },  
    {
      id: 7,
      title: "Software Engineering:   Related Online Links and Web Resources",
      imageUrl: "https://media.istockphoto.com/id/1154341677/es/foto/concepto-de-industria-y-tecnolog%C3%ADa-industria-4-0.webp?b=1&s=170667a&w=0&k=20&c=nmhlvMZm8vhtbfr9nJ6aCBRzn7uEfgQ_T47b5g6bBXE=", 
      readMoreUrl: "https://www.ece.rutgers.edu/~marsic/books/SE/links/",
    },  
    {
      id: 8,
      title: "76 Best Software Engineer Skills to Learn in 2023: Level Up!",
      imageUrl: "https://images.unsplash.com/photo-1581093805071-a04e696db334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNvZnR3YXJlJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D", 
      readMoreUrl: "https://eranstiller.com/software-engineer-skills",
    },  
    {
      id: 9,
      title: "Girls Who Code",
      imageUrl: "https://media.istockphoto.com/id/1199261260/es/foto/profesora-ayudando-a-la-alumna-femenina-a-construir-robot-car-en-la-lecci%C3%B3n-de-ciencias.webp?b=1&s=170667a&w=0&k=20&c=vvPKLHCbgPfOi_IoApsckVxIHNKjKXgYRrsgbSsTGTo=", 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjWi8_CrdKEAxWBhloFHVeqDUoYABAAGgJ2dQ&ase=2&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkIprZRJtjgrg6S3pocFZlM6diFO6z50jpFxVyUbKhW2YtWMtepJrSAaAp2DEALw_wcB&ohost=www.google.com&cid=CAESV-D2wIkC_HW6m2Ufuv97UqGIBkOnOyLoDyOgYu2bIH21rgt14-mUmoRWnneCQmdqRBWwfjDGABSUXtJQT-jV1QyncFIsVGEJv7e1jZdbL7heY8rtLBUySA&sig=AOD64_1GYf-ehw5pQly5VpSHrD3IAcpyqw&q&nis=4&adurl&ved=2ahUKEwj11MnCrdKEAxWgRDABHT5WAQA4MhDRDHoECAAQAQ",
    },  
    {
      id: 10,
      title: "18 Best Software Engineering Books",
      imageUrl: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbWluZyUyMGJvb2tzfGVufDB8fDB8fHww", 
      readMoreUrl: "https://builtin.com/software-engineering-perspectives/best-software-engineering-books",
    },  
  ];

  return (
    <div className="App">
      <div className='title'>
        <h1 className='h1'>Tech Talks and Guides</h1>
      </div>
      <CardGrid cards={cardsData} />
    </div>
  );
}
export default App;

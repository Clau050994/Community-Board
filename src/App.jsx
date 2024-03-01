
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import webdevelopment from './images/webdevelopment.jpg';





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
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 3,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 4,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 5,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 6,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 7,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 8,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 9,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
    {
      id: 10,
      title: "Become a Full Stack Web Developer",
      imageUrl: webdevelopment, 
      readMoreUrl: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjj__qAxM6EAxUcm1oFHVMkCAUYABABGgJ2dQ&ase=2&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNWTDVJZd2c1nXNDY9A2RWR6YegEDFwGpnj-qP2bR3JI4XOzBPlA9fBoC-bkQAvD_BwE&ohost=www.google.com&cid=CAESV-D21niVXjPr9MgdhsJp-3VBpuWlPFKX9-bDPYESwX7nqDM7Oha62CGHwGrd4Kiu1Kji2j1rsn2MZIhXA86wh2uwrW_mIPAg_D1gIi35Ir0Px-iFWw4k5Q&sig=AOD64_2pJOnOA17DzG5n1GWMgLUXdY6ZUg&q&nis=4&adurl&ved=2ahUKEwjb--qAxM6EAxVARjABHYqFCsMQ0Qx6BAgMEAE",
    },  
  ];

  return (
    <div className="App">
      <h1>Tech Talks and Guides</h1>
      <CardGrid cards={cardsData} />
    </div>
  );
}
export default App;

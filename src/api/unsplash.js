import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID o8iosdbzVCld54Q6X0-XWq55VwsVA0Zy-0N6QfzrKzE'
      }
})

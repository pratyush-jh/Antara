import React , {useState} from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = ( {eventname } ) => {
     const { title , id , image_url , tag_line } = eventname;
     const [hover, setHover] = useState(false);
     return (
          <div>
               <div
               onMouseOver={() => setHover(true)}
               onMouseOut={() => setHover(false)} 
               className=" max-w-[18rem] rounded-lg bg-white shadow-lg shadow-gray-400 dark:bg-gradient-to-tr from-pink to-orange-400 ">
               <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                         className={`rounded-t-lg h-60 w-full object-cover transition-all duration-300 ease-in-out mdmax:h-40 ${hover? 'h-72  mdmax:h-72':''}`}
                         src={image_url} 
                         alt=""  />
                    </div>
                    <div className={`pr-6 pl-6 pt-4 `}  >
                    <h5
                         className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                         {title}
                    </h5>
                    <p className=" font-light text-sm text-neutral-600 dark:text-neutral-200">
                         {tag_line}
                    </p>
               </div>
               <div className='p-6 mt-4 mb-4 text-center '>
               <Link className=" bg-white p-2 rounded-lg 
                " to={``}>
                    Register
               </Link>
               </div>
               </div>       
          </div>
        );
};

export default CategoryCard;
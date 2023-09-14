import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imageEzreal from './image/ezreal.jpg';
import Home from './Home.jsx';
import Home_admin from './Home_admin.jsx';
import Home_user from './Home_user.jsx';
import Navbar from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';


function Owner() {
    return (
      <>
        <Navbar/>
        <div className='owner'> 
          <h1>Toey - Group K - 25</h1>
        
          <div >
              <img src={imageEzreal} alt="ezreal" width="100%" height="100%"/>
          </div>
          <div >
              <p>Short Biography:</p>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam voluptatum sint ut molestias perspiciatis nobis officia facilis inventore aliquid voluptates laborum ex pariatur sapiente eligendi nulla, repudiandae vitae quae.
                  Nobis minus repellat beatae quod non consectetur distinctio, ex repellendus, recusandae, rerum debitis aperiam? Perspiciatis ipsam, tenetur nobis fugit voluptates, iste sed quae repellendus earum eveniet ut nesciunt dolor vel!
                  Soluta commodi perspiciatis reiciendis quae. Nihil ullam laboriosam officiis odio eos, omnis similique quos consequatur dolorum, laborum sapiente, dolores animi doloribus! Ex voluptatem vel minus eligendi fuga, quam voluptatum explicabo!
                  Fuga amet, quo id explicabo et nesciunt inventore saepe rerum. Tenetur illum enim tempora iste placeat suscipit eum ea, dolores natus minima pariatur aut itaque asperiores nulla sunt ipsa eaque.
                  Cupiditate consequuntur quas reprehenderit assumenda dignissimos eveniet pariatur doloribus vero, aliquid quibusdam natus corrupti dicta rerum culpa voluptate ex earum cum. Commodi suscipit accusamus ut laborum porro eos, dicta atque.
                  Ipsa at, id atque voluptas sed, ipsam nihil maiores hic eius a, asperiores velit rem totam doloremque non quam itaque iure accusamus porro fugit. Labore fugiat ea eos eaque ab!
                  Suscipit, tempora natus cupiditate eius incidunt esse similique nostrum, facere cumque quo, deleniti quis sint neque consequuntur est molestias voluptatibus nulla quod sapiente! Voluptas nisi maiores sequi dolore sint minima!
                  In, odit temporibus blanditiis aliquam minima eveniet quasi assumenda natus enim quidem alias aut eaque maiores perspiciatis quis hic. Quidem accusantium culpa nisi necessitatibus qui quaerat inventore perferendis aspernatur molestias.
                  Mollitia, voluptatum facilis provident ab reprehenderit consequuntur fugiat laborum, veniam laboriosam odio adipisci, iusto maiores. Suscipit explicabo quisquam eaque recusandae, optio architecto? Sed tempora vero magni amet, voluptatum ducimus repudiandae.
                  Numquam, cum doloribus magni sapiente autem tempora velit quibusdam eos doloremque, blanditiis dolore labore at, repellendus incidunt consectetur nemo odio sint temporibus quis modi amet. Voluptate eveniet doloribus molestias omnis?
              </p>
          </div>
        </div>
      </>
    )
  }
  

export default Owner
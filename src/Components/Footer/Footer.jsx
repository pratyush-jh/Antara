import React from 'react'
import "./bootstrap.min.css";

const Footer = () => {
  return (
    <div>
    <footer class="bg-skin dark:bg-skin">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="Antara/src/Components/Home/Home.jsx" class="flex items-center">
                  <img src="" class="h-8 me-3" alt="Arohana Logo" />
                  <span class="self-center text-5xl font-bold whitespace-nowrap dark:text-brown">Arohana</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-brown uppercase dark:text-brown">Resources</h2>
                  <ul class="text-brown dark:text-brown font-medium">
                      <li class="mb-4">
                          <a href="https://pgdavhyperion.in/" class="hover:underline">Hyperion</a>
                      </li>
                      <li>
                          <a href="https://www.pgdavcollege.in//" class="hover:underline">PGDAV College</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-brown uppercase dark:text-brown">Follow us</h2>
                  <ul class="text-brown dark:text-brown font-medium">
                      <li class="mb-4">
                          <a href="https://www.instagram.com/hyperion_pgdav/" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://m.facebook.com/PGDAVhyperion?_rdr" class="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-brown uppercase dark:text-brown">Team</h2>
                  <ul class="text-gray-500 dark:text-brown font-medium">
                      <li class="mb-4">
                          <p>Hyperion - PGDAV</p>
                      </li>
                      <li>
                        <p>Website Development Team <br />
                        Techwhiz - IT Society</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-brown sm:mx-auto dark:border-brown lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-brown sm:text-center dark:text-brown">© 2024 <a href="Antara/src/Components/Home/Home.jsx" class="hover:underline">Arohana™.   </a>
          </span>
          <span class="text-sm text-brown sm:text-center dark:text-brown">© 2024 <a href="https://pgdavhyperion.in/" class="hover:underline">Hyperion™</a>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0"> </div>
      </div>
    </div>
    </footer>
    </div>
  )
}
export default Footer
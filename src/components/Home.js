import React from 'react'
import logo from "./logo.png"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
    
    {/* navbar */}
    <div class="m-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to="/"><img alt="logo" src={logo}/></Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                </div>
                <form class="d-flex w-50">
                    <div class="input-group position-relative fs-6">
                    <input type="text" class="form-control rounded-pill text-center shadow-none navinp" placeholder="Search groups in ATG"/>
                    <i class="bi-search text-secondary position-absolute top-2 start-5 pl-3 d-sm-none d-lg-block"></i> 
                    </div>
                    
                </form>
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link">Create account. <span className="text-primary"><Link to="/Login">It's Free</Link></span></a>
                </div>
            </div>
        </div>
    </nav>
    

{/* Hero */}
<div class="jumbotron jumbotron-fluid position-relative mt-1">
  <div class="container position-absolute top-50 start-50 translate-middle mr-5 mt-5 hero">
    <h1 class="display-4 fs-2 fw-bold ml-5 ms-5">Computer Engineering</h1>
    <p className='ml-5 ms-5'>142,765 Computer Engineers follow this</p>
  </div>
</div>
</div>


{/* posts */}

  <div class="mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer border-b-2">
      <a class="mr-5 hover:text-gray-900 font-bold">All Posts(32)</a>
      <a class="mr-5 hover:text-gray-900">Article</a>
      <a class="mr-5 hover:text-gray-900">Education</a>
      <a class="mr-5 hover:text-gray-900">Event</a>
      <a class="mr-5 hover:text-gray-900">Job</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0  py-1 px-3 me-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Write post
    <span class="material-symbols-outlined m-1">
    arrow_drop_down
</span>
    </button>
    <button class="inline-flex items-center bg-[#2F6CE5] border-0 py-1 px-3 text-white focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0">Join Group
    <span class="material-symbols-outlined m-1">
      group_add
    </span>
    
    </button>
  
    
    
   
    {/* Blog */}
    <section class="text-gray-600 body-font ">

    
      
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden">
          
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/721/401" alt="blog"/>
          <div class="p-6">
          <div class="dropdown float-end">
                    <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="material-symbols-outlined">
                              more_horiz
                              </span>
                    </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Report</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">🔬️ Education</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">What if famous brands had regular fonts? Meet RegulaBrands!</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
            <img class=" ms-2 w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="Avatar of Writer"/>
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Leon Jame
                
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/721/401" alt="blog"/>
          <div class="p-6">
          <div class="dropdown float-end">
                    <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="material-symbols-outlined">
                              more_horiz
                              </span>
                    </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Report</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">✍️ Article</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap">
            <img class=" ms-2 w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="Avatar of Writer"/>
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Leon Jame
                
              </a>
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/721/401" alt="blog"/>
          <div class="p-6">
          <div class="dropdown float-end">
                    <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="material-symbols-outlined">
                              more_horiz
                              </span>
                    </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Report</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">🗓️ Meetup</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Meetup @ Jordhan</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
            <img class=" ms-2 w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430" alt="Avatar of Writer"/>
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Leon Jame
                
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  
  
    </>
  )
}

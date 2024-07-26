const Navbar = ({web3Handler,account}) => {
    return(
        <div style={{marginTop: '0px', paddingTop: '0px'}}>
            <div class="flex flex-wrap h-screen" style={{}} >
                <section class="relative mx-auto">
                    <nav class="flex justify-between bg-gray-900 text-white w-screen" style={{background:'black'}}>
                    <div class="px-5 xl:px-12 py-6 flex w-full items-center" style={{textDecoration: 'none',listStyle: 'none'}}>
                        <a class="text-3xl font-bold font-heading" href="#" style={{fontStyle: 'italic'}}>
                        nftmarketplace
                        </a>
                        <li><a class="hover:text-gray-200 hidden md:flex px-5 mx-auto font-semibold font-heading item-center" href="/" style={{marginLeft: '122px'}}>Home</a></li>
                        <li><a class="hover:text-gray-200 hidden md:flex px-5 mx-auto font-semibold font-heading item-center" href="/create" style={{marginLeft: '122px'}}>Create</a></li>
                        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 item-center" style={{justifyContent: 'space-between'}}>
                            
                            <form class="max-w-md mx-auto flex items-center space-x-2">   
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block p-2 ps-20 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seach For nft" required  style={{paddingLeft: '150%'}}/>
                                    
                                </div>

                            </form>
                        </ul>
                        <div class="hidden xl:flex items-center space-x-5 items-center">
                        <a class="hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a class="flex items-center hover:text-gray-200" href="/about">
                        {account ? (
                            <a
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="button nav-button btn-sm mx-4"
                            >
                                <button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </button>
                            </a>
                        ) : (
                            <a
                                href="#"
                                onClick={()=> {
                                    const result = web3Handler();
                                    console.log(result);
                                }}
                                className="button nav-button btn-sm mx-4"
                            >
                                <button variant="outline-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </a>
                        )}

                        </a>
                        </div>
                    </div>
                    <a class="xl:hidden flex mr-6 items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="flex absolute -mt-5 ml-4">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                        </span>
                    </a>
                    <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                    </nav>
                    
                </section>
                </div>
                <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a title="Follow me on twitter" href="https://www.twitter.com/imanav10" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                            <img class="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;
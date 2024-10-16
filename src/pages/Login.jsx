export default function Example() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
          {/* 3D Background Blur Effect */}
          <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg transform -skew-y-1"></div>
  
          <div className="sm:mx-auto sm:w-full sm:max-w-sm relative z-10">
            <h2 className="mt-10 text-center text-3xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg">
              Sign in to your account
            </h2>
          </div>
           
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative z-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition transform focus:scale-105 duration-300"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition transform focus:scale-105 duration-300"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
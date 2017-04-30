const wrapper = (callback, ...params) => {
   return new Promise((resolve, reject) => {
      callback(...params, (err, ...rest) => {
         if (err) {
            return reject(err);
         }

         resolve(...rest)
      })
   })
}

module.exports = wrapper;
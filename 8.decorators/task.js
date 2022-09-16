
function cachingDecoratorNew(func) {
   let cache = [];
   function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
         console.log("Из кэша: " + objectInCache.result);
         return "Из кэша: " + objectInCache.result;
      }

      let result = func(...args);
      cache.push({ hash, result });
      if (cache.length > 5) {
         cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
   }
   return wrapper;
}

function debounceDecoratorNew(func, delay) {
   let timeoutId;
   wrapper.count = 0;
   wrapper.allCount = 0;
   function wrapper(...args) {
      if (!timeoutId) {
         wrapper.count++;
         func(...args);
      }
      wrapper.allCount++;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         wrapper.count++;
         return func(...args);
      }, delay)
   }
   return wrapper;
}


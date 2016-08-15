"use strict";

app.factory("WineFactory", function (FirebaseURL, $q, $http, AuthFactory) {

let getWineList = function() {
    let items = [];
    return $q(function (resolve, reject) {
        $http.get(`${FirebaseURL}/items.json`)
        .success(function(itemObject) { 
            let itemCollection = itemObject;
            // console.log("item object", itemObject);
            if (itemObject) { 
                Object.keys(itemCollection).forEach(function(key) {
                    itemCollection[key].id=key;
                    items.push(itemCollection[key]);
                    
                });
            }
            resolve(items);
        })
        .error(function(error) {
            reject(error);
        });
    });
};

let postNewWine = function(newWine) {
   return $q(function(resolve, reject) {
    $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newWine))
        .success(function(ObjFromFirebase) {
            resolve(ObjFromFirebase);
        }).error(function (error) {
            reject(error);
        });
    });
};

let deleteWine = function(id) {
    return $q(function(resolve, reject) {
      $http.delete(
        `${FirebaseURL}/items/${id}.json`
      )
      .success(function() {
        resolve();
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  var getSingleWine = function(id){
          return $q(function(resolve, reject){
          $http.get(
            `${FirebaseURL}items/${id}.json`
            )
            .success(function(itemObject){ 
                resolve(itemObject);
            })
            .error(function(error){
                reject(error);
            });  
        }); 
    };

    var updateWine = function(id, newWine){
        let user = AuthFactory.getUser();                        
        return $q(function(resolve, reject) {
            $http.put(
              `${FirebaseURL}items/${id}.json`,
                JSON.stringify({
                    Name: newWine.Name,
                    Vineyard: newWine.Vineyard,
                    Varietal: newWine.Varietal,
                    Year: newWine.Year,
                    Region: newWine.Region,
                    Notes: newWine.Notes
                })
            )
            .success(function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
     };


return  { getWineList, postNewWine, deleteWine, getSingleWine, updateWine };

});







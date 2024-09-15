import React from 'react';

const ArticleContext = React.createContext({
    name: ""
});


 export const ArticleContextProvider = ({children}) =>{
    const name = "Alie Kalokoh";
      
    return(
        <ArticleContext.Provider value={{name: name}}>
          {children}
        </ArticleContext.Provider>
    )
    }

    export default ArticleContext;

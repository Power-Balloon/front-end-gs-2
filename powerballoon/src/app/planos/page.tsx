import React from 'react';

const Planos: React.FC = () => {
    return (
         <div className="container">
       <div className="card">
           <div className="card-title">
               <h2>Basic</h2>
               <p><i className="fa fa-rupee"></i>99/mês</p>
           </div>
           <div className="card-content">
               <ul>
                   <li><i className="fa fa-check-circle"></i>1 PowerBalloon</li>
                   <li><i className="fa fa-check-circle"></i>50 paineis solares por Balão</li>
                   <li><i className="fa fa-check-circle"></i>Cadastrar funcionarios para gerenciar</li>
                   <li><i className="fa fa-times-circle"></i>Visualização de localidade do seu Balão</li>
                   <li><i className="fa fa-times-circle"></i>Manunteção de Balão</li>
               </ul>
               <button><a href="#">Assine Aqui</a></button>
           </div>
       </div>
       <div className="card">
           <div className="card-title">
               <h2>Standard</h2>
               <p><i className="fa fa-rupee"></i>199/mês</p>
           </div>
           <div className="card-content">
               <ul>
                   <li><i className="fa fa-check-circle"></i>3 PowerBallons</li>
                   <li><i className="fa fa-check-circle"></i>80 paines solares por Balão</li>
                   <li><i className="fa fa-check-circle"></i>Cadastrar funcionarios para gerenciar</li>
                   <li><i className="fa fa-times-circle"></i>Visualização de localidade do seu Balão</li>
                   <li><i className="fa fa-times-circle"></i>Manunteção de Balão</li>
               </ul>
               <button><a href="#">Assine Aqui</a></button>
           </div>
       </div>
       <div className="card">
           <div className="card-title">
               <h2>Premium</h2>
               <p><i className="fa fa-rupee"></i>299/mês</p>
           </div>
           <div className="card-content">
               <ul>
                   <li><i className="fa fa-check-circle"></i>5 PowerBallons</li>
                   <li><i className="fa fa-check-circle"></i>200 paines solares por Balão</li>
                   <li><i className="fa fa-check-circle"></i>Cadastrar funcionarios para gerenciar</li>
                   <li><i className="fa fa-times-circle"></i>Visualização de localidade do seu Balão</li>
                   <li><i className="fa fa-times-circle"></i>Manunteção de Balão</li>
               </ul>
               <button><a href="#">Assine Aqui</a></button>
           </div>
       </div>
   </div>

    
    
    
    
    
    ); 
}; 
export default Planos
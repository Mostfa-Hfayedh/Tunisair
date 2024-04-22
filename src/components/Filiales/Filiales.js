import React from 'react'
import "./Filiales.css"

function Filiales() {
//     $(function () {
//         $('#Edit-show').click(function () {
//         $('#Edit-modal').fadeIn().css("display","flex");
// });
// $('.close-model').click(function () {
//     $('#Edit-modal').fadeOut().css("display","none");
// });
// });
  return (
    <div class="card">
 <p class="cookieHeading">Filiales</p>
  <p class="cookieDescription">We use cookies to ensure that we give you the best experience on our website. </p>

  <div class="buttonContainer">
    <button class="acceptButton">Edite</button>
  <button class="declineButton">Delete</button>
  </div>
  <div id='Edit-modal'>
    <div className='modal'>
        <div className='top-form'>
            <div className='close-modal'>
                &#10006;
            </div>
        </div>
        <div class="container">
	<p class="title">Filiale</p>
<div class="form-container">
	<div class="long-input">
		<p>Dénomination :</p>
		<input type='text' id="denomination1" />	
	</div>
	<div class="top-section">
		<p>Type :</p>
		<radio ></radio>
		<div class="top-section-right">
			<p>Abréviation :</p>
			<input type='text'/>
		</div>
	</div>
	<div class="long-input">
		<p>Addresse :</p>
		<input type='Text'/>
	</div>
	<div class="middle-section">
		<div class="small-inputs">
			<div class="middle-input">
				<p>Directeur Général :</p>
				<input type='text'/>
			</div>
			<div class="middle-input">
				<p>Valeur Nominale :</p>
							<input type='text'/>
			</div>
			<div class="middle-input">
				<p>Identifiant Unique :</p>
                <input type='text'/>
            </div>
			</div>
		</div>
		<div class="middle-section-right">
			<div class="middle-input">
				<p>Nombre de siége(s) :</p>
				<input type='text'/>
			</div>
		</div>
	</div>
	<div class="long-input">
		<p>Activité Principale :</p>
        <input type='text'/>
    </div>
	</div>
	<div class="big-input">
		<p>Activité(s) Annexe(s) :</p>
        <input type='text'/>
        	</div>
	<div class="select-section">
		<p>Vis-à-vis :</p>
		
		

	</div>
	<div class="submit">
	<button value="Submit" id="button1"/>
	
	</div>
</div>
	
</div>
    </div>
 


  )
}

export default Filiales
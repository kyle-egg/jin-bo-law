function Menu() {

  const cocktials = [
    { name: 'High Life', description: 'Akashi - Tai Umeshu Plum Liquor, Edmond Briotett Lychee Liquor, Zia Venetto Prosecco', price: 15.50 },
    { name: 'Just Peachy', description: 'Edmond Briotett Elderflower & Peach Liquor, Fresh Lime Juice, London Essence Peach & Jasmine soda', price: 14.50 },
    { name: 'Jin Bo Nana', description: 'Mount Gay Eclipse & Black Barrel Dark Rum, Wray & Nephew Jamaican Overproof Rum, Cointreau Orange Triple-Sec Liquor, Angostura Bitters, JBL Winter Punch Pineapple Puree', price: 14.50 },
    { name: 'Old Tokyo Fashion', description: 'Hatozaki Japanese Whiskey Infused With Cacao Nibs, Honey, Marmalade, Orange Bitters', price: 14.50 },
    { name: 'Pickled Tink', description: 'Belvedere Vodka, Edmond Briotett Fraise De Bois & Ginger Liquor, Pickled Ginger Juice, London Essence Ginger Beer', price: 14.50 },
    { name: 'CTea Diet', description: 'Botanist Gin, Edmond Briotett Hisbiscus Green Tea Liquor, Fresh Lemon Juice, Egg White', price: 14.50 },
    { name: 'Blooming Fire', description: 'Sauvelle Vodka, Fresh Passionfruit Puree, Mango Juice, Red Chilli Infused Blue Agave Nectar', price: 15.50 },
    { name: 'Tuluminati', description: 'Volcan Blanco Tequila, Mezcal Verde, Edmond Briotett Mandarin Liquor, Fresh Lime Juice, Pineapple Juice, Activated Charcoal', price: 15.50 },
    { name: 'Hot Sailor', description: 'Sailor Jerrys Spiced Rum, Edmond Briotett Fig Liquor, Organic Honey, Winter Spices, Lemon', price: 14.50 },
    { name: 'Kakuroni', description: 'Botanist Gin, Kakuzu Cherry Bitter Liquor, Antica Formula Vermouth', price: 14.50 },
    { name: 'Winter of 1738', description: 'Remy Martin 1738 cognac, Moët Chandon Brut Champagne, Antica Formula Vermouth, Dark Chocolate Bitters', price: 17.38 },
    { name: 'Expense Me', description: 'Sharing Cocktail Hennessy Vs Cognac, Moët Chandon Brut Champagne, Fresh Strawberry Puree, Lemonade, Apple Juice, Cranberry Juice', price: 18.88 }
  ]
 
  const gAndT = [
    {
      name: 'The Botanist Pink JBL', 
      price: 16,
      description: 'Botanist Pink, London Essence Low Calorie Tonic, Strawberries, Lemon',
    },
    {
      name: 'Gin Mare', 	
      price: 16,
      description: 'Gin Mare, London Essence Grapefruit & Rosemary Tonic, Rosemary, Martini Olives',
    },
    {
      name: 'Atopia Low ABV Gin', 			
      price: 16,
      description: 'Atopia Low ABV, London Essence Blood Orange Tonic, Seasonal Dried Fruits',
    },
    {
      name: 'Amber Pineapple Gin',
      price: 16,
      description: 'Amber Pineapple Gin, London Essence Low Calorie Tonic, Fresh Pineapple',
    },
    {
      name: 'Hendricks Orbium',
      price: 19,
      description: 'Hendricks Orbium, London Essence Orange & Elderflower Tonic, Cucumber, Mint',
    },
    {
      name: 'Kakuzo Yuzu Gin',
      price: 17,
      description: 'Kakuzo Yuzu Gin, London Essence Low Calorie Tonic, Kumquat Flower',
    },
    {
      name: 'East 135',
      price: 18,
      description: 'East 135 Gin, London Essence Low Calorie Tonic, Mint, Seasonal Dried Fruit',
    }
  ]

  const champagne = [
    { name: 'Moët & Chandon Brut', 	      
      glass: 16,	bottle: 98 },
    { name: 'Moët & Chandon Rose', 		    
      glass: 26,		bottle: 155 },
    { name: 'Moët & Chandon Ice', 			    
      bottle: 155 },
    { name: 'Moët & Chandon Ice Rose',     
      bottle: 200 },
    { name: 'Ruinart Blanc De Blanc',	    
      bottle: 200 },
    { name: 'Ruinart Rose', 						    
      bottle: 220 },
    { name: 'Veuve Clicquot Brut', 		    
      bottle: 125 },
    { name: 'Veuve Clicquot Rose', 		    
      bottle: 165 },
    { name: 'Dom Perignon', 						    
      bottle: 410 },
    { name: 'Dom Perignon P2', 				    
      bottle: 1000 },
    { name: 'Armand De Brignac ACE Brut',  
      bottle: 800 },
    { name: 'Cristal Rose Vintage 2004',   
      bottle: 1700 }
  ]

  const sizeMatters = [
    { name: 'Moët Chandon Brut Magnum', bottle: 260 },
    { name: 'Dom Perignon Magnum', bottle: 1100 },
    { name: 'Dom Perignon Magnum Luminous', bottle: 1300 },
    { name: 'Armand De Brignac ACE Magnum', bottle: 2500 },
    { name: 'Dom Perignon Methuselah', bottle: 8000 }
  ]

  const redWines = [
    {
      name: 'Barbera D’Asti Conti Buneis, Barbera',
      glass: 10.50,	
      bottle: 44,
    },
    {
      name: 'Terrazas Selection, Cabernet Sauvignon',
      glass: 13.50,
      bottle: 58,
    },
    {
      name: 'Cloudy Bay, Pinot Noir',
      bottle: 118,
    },
    {
      name: 'Gevrey-Chambertin Patriarche Pere & Fils',
      bottle: 188,
    }
  ]  

  const whiteWines = [
    { name: 'Franschhoek Cellar, Chenin Blanc', glass: 10.50,	bottle: 44 },
    { name: 'Arthur Mertz, Pinot Gris', glass: 12.50,	bottle: 54 },
    { name: 'Cloudy Bay, Sauvignon Blanc', glass: 19.50, 
      bottle: 82 },
    { name: 'Reata, Chardonay', 								        
      bottle: 128 }
  ]

  const roseWines = [
    { name: 'Berne Esprit Mediterranee', 					  glass: 10.50, bottle: 44 },
    { name: 'Ultimate Provence, Cote de Provence', 	glass: 16.50, bottle: 72 }
  ]

  const sparklingWines = [
    { name: 'Zia Veneto Prosecco', glass: 10.50, bottle: 54 }
  ]

  const bottleService = [
    { name: 'Belvedere Pure 700ml', 						                type: 'vodka', bottle: 280 },
    { name: 'Beluga Goldline 700ml', 					                type: 'vodka', bottle: 550 },
    { name: 'Sauvelle French Grain Vodka', 		                type: 'vodka', bottle: 300 },
    { name: 'Belvedere Magnum', 								                type: 'vodka', bottle: 650 },
    { name: 'Sauvelle Magnum', 								                type: 'vodka', bottle: 700 },
    { name: 'Volcan De Mi Tierra Tequila Blanco', 					    type: 'tequila', bottle: 240 },
    { name: 'Volcan De Mi Tierra Tequila Cristalino', 					type: 'tequila', bottle: 500 },
    { name: 'Patron Reposado', 								                type: 'tequila', bottle: 300 },
    { name: 'Enemigo Extra Anejo', 								            type: 'tequila', bottle: 450 },
    { name: 'Don julio 1942', 									                type: 'tequila', bottle: 700 },
    { name: 'Clase Azul Plata', 									              type: 'tequila', bottle: 600 },
    { name: 'Clase Azul Reposado', 								            type: 'tequila', bottle: 700 },
    { name: 'Clase Azul Anejo', 									              type: 'tequila', bottle: 2000 },
    { name: 'Casa Dragones Blanco', 							              type: 'tequila', bottle: 560 },
    { name: 'Casa Dragones Anejo', 								            type: 'tequila', bottle: 900 },
    { name: 'Amores Mezcal Cupreata Rare', 						        type: 'tequila', bottle: 2000 },
    { name: 'Bumbu 700ml', 									                  type: 'Gin', bottle: 280 },
    { name: 'Bumbu XO 700ml', 								                type: 'Gin', bottle: 340 },
    { name: 'Eminente Ron De Cuba 700ml',		                  type: 'Gin', bottle: 340 },
    { name: 'Santa Teresa 700ml', 						                type: 'Gin', bottle: 3600 },
    { name: 'Botanist 700ml', 								                type: 'Gin', bottle: 280 },
    { name: 'Ki No Bi', 							  			                type: 'Gin', bottle: 300 },
    { name: 'Ki No Tea', 										                  type: 'Gin', bottle: 380 },
    { name: 'Hennessy VS', 									                  type: 'Cognac', bottle: 280 },
    { name: 'Hennessy XO', 									                  type: 'Cognac', bottle: 550 },
    { name: 'Remy Martin 1738', 							                type: 'Cognac', bottle: 300 },
    { name: 'Remy Marin XO', 								                  type: 'Cognac', bottle: 550 },
    { name: 'Louis 13 700ml', 								                type: 'Cognac', bottle: 6000 },
    { name: 'Glenmorangie 10 years', 				                  type: 'Whiskey', bottle: 280 },
    { name: 'Hatozaki Blended', 							                type: 'Whiskey', bottle: 280 },
    { name: 'Balvenie 14 Caribbean cask', 		                type: 'Whiskey', bottle: 300 },
    { name: 'Yamazaki 12 years', 						                  type: 'Whiskey', bottle: 360 },
    { name: 'Yamazaki 18 years', 						                  type: 'Whiskey', bottle: 3000 }
  ]

  const spirits = [
    { name: 'Volcan De Mi Tierra Tequila Blanco', 				    type: 'Tequila & Mezcal', glass: 12.50 },
    { name: 'Volcan De Mi Tierra Tequila Cristalino', 				type: 'Tequila & Mezcal', glass: 24 },
    { name: 'Patron Reposado',								                type: 'Tequila & Mezcal', glass: 14 },
    { name: 'Enemigo Extra Anejo', 							            type: 'Tequila & Mezcal', glass: 35 }, 
    { name: 'Don julio 1942', 								                type: 'Tequila & Mezcal', glass: 47 },
    { name: 'Clase Azul Plata',								              type: 'Tequila & Mezcal', glass: 55 },
    { name: 'Clase Azul Reposado',							              type: 'Tequila & Mezcal', glass: 85 },
    { name: 'Clase Azul Anejo', 								              type: 'Tequila & Mezcal', glass: 300 },
    { name: 'Clase azul Mezcal', 							              type: 'Tequila & Mezcal', glass: 250 },
    { name: 'Casa Dragones Blanco', 						              type: 'Tequila & Mezcal', glass: 23 },
    { name: 'Casa Dragones Anejo',							              type: 'Tequila & Mezcal', glass: 195 },
    { name: 'Vivir Blanco', 								                  type: 'Tequila & Mezcal', glass: 15 },
    { name: 'Codigo Rosado', 								                type: 'Tequila & Mezcal', glass: 19 },
    { name: 'Amores Mezcal Verde', 							            type: 'Tequila & Mezcal', glass: 13 },
    { name: 'Amores Mezcal Espadin', 						            type: 'Tequila & Mezcal', glass: 18 },
    { name: 'Amores Mezcal Cupreata', 						            type: 'Tequila & Mezcal', glass: 34 },
    { name: 'Belvedere Pure',								                type: 'Vodka', glass: 12 },
    { name: 'Belvedere Citrus',								              type: 'Vodka', glass: 13 },
    { name: 'Beluga Goldline', 								              type: 'Vodka', glass: 45 },
    { name: 'Sauvelle French grain', 							          type: 'Vodka', glass: 14 },
    { name: 'Botanist',									                    type: 'Gin', glass: 11.50 },
    { name: 'The Botanist Pink', 							              type: 'Gin', glass: 12.50 },
    { name: 'Monkey 47', 									                  type: 'Gin', glass: 20 },
    { name: 'East 135 Gin', 								                  type: 'Gin', glass: 14 },
    { name: 'Hendricks', 									                  type: 'Gin', glass: 13 },
    { name: 'Ki No Bi', 									                    type: 'Gin', glass: 15 },
    { name: 'Ki No Tea', 									                  type: 'Gin', glass: 18 },
    { name: 'Bacardi Carta Blanca', 							            type: 'Rum', glass: 11 },
    { name: 'Sailor Jerry Spiced Rum', 						          type: 'Rum', glass: 11 },
    { name: 'Mount Gay Eclipse',							                type: 'Rum', glass: 12 },
    { name: 'Mount Gay Black Barrel',						            type: 'Rum', glass: 13 },
    { name: 'Mount Gay XO',								                  type: 'Rum', glass: 17 },
    { name: 'Santa Teresa 1796', 							              type: 'Rum', glass: 22 },
    { name: 'Wray and Nephews Overproof rum',					      type: 'Rum', glass: 15 },
    { name: 'Goslings', 									                    type: 'Rum', glass: 13 },
    { name: 'Bumbu',									                        type: 'Rum', glass: 14 },
    { name: 'Bumbu XO',									                    type: 'Rum', glass: 20 },
    { name: 'Eminente Ron De Cuba', 						              type: 'Rum', glass: 24 },
    { name: 'Kakuzo Yuzu Gin', 								              type: 'Asian Spirit', glass: 14 },
    { name: 'Kakuzo Bitter Cherry', 							            type: 'Asian Spirit', glass: 14 },
    { name: 'Akashi Tai Yuzushu', 							              type: 'Asian Spirit', glass: 13 },
    { name: 'Akashi Tai Umeshu', 							              type: 'Asian Spirit', glass: 13 },
    { name: 'Jinro Soju Original', 						             	type: 'Asian Spirit', glass: 11 },
    { name: 'Ardbeg Single Islay 10 Years Malt', 					  type: 'Scotch', glass: 13 },
    { name: 'Ardbeg Uigeadail', 							                type: 'Scotch', glass: 17 },
    { name: 'Balvenie 12 years Double Wood',					        type: 'Scotch', glass: 13 },
    { name: 'Balvenie 14 years', 							              type: 'Scotch', glass: 15 },
    { name: 'Balvenie 17 years Double Wood',					        type: 'Scotch', glass: 25 },
    { name: 'Balvenie 21 years',							                type: 'Scotch', glass: 37 },
    { name: 'Balvenie 30 years',							                type: 'Scotch', glass: 275 },
    { name: 'Bruichladdich Classic Laddie',						      type: 'Scotch', glass: 13 },
    { name: 'Bruichladdich Octomore',						            type: 'Scotch', glass: 15 },
    { name: 'Bruichladdich Port Charlotte',						      type: 'Scotch', glass: 14 },
    { name: 'Bruichladdich Black Art',						            type: 'Scotch', glass: 88.88 },
    { name: 'Glenmorangie X Single Malt',					          type: 'Scotch', glass: 15 },
    { name: 'Glenmorangie 10 years',							            type: 'Scotch', glass: 16 },
    { name: 'Glenmorangie 18 years',							            type: 'Scotch', glass: 26 },
    { name: 'Glenmorangie Signet',							              type: 'Scotch', glass: 40 },
    { name: 'Glenfiddich IPA',								                type: 'Scotch', glass: 15 },
    { name: 'Glenfiddich 21 years',						      	      type: 'Scotch', glass: 41 },
    { name: 'Glenfiddich Grand Cru',							            type: 'Scotch', glass: 90 },
    { name: 'Mosburn Islay',								                  type: 'Scotch', glass: 18 },
    { name: 'Mosburn Speyside',							                type: 'Scotch', glass: 20 },
    { name: 'Hibiki Harmony', 								                type: 'Japanese', glass: 22 },
    { name: 'Nikka From the Barrel',							            type: 'Japanese', glass: 18 },
    { name: 'Yamazaki 12 years',							                type: 'Japanese', glass: 30 },
    { name: 'Yamazaki 18 years',							                type: 'Japanese', glass: 25 },
    { name: 'Mars Komagatake', 							                type: 'Japanese', glass: 55 },
    { name: 'Mars Cosmo',								                    type: 'Japanese', glass: 20 },
    { name: 'Hatozaki Blended',							                type: 'Japanese', glass: 14 },
    { name: 'Hatozaki Single malt',							            type: 'Japanese', glass: 22 },
    { name: 'Woodford Reserve', 							                type: 'Bourbon, Irish, Rye', glass: 12 },
    { name: 'Hudson Baby bourbon',							              type: 'Bourbon, Irish, Rye', glass: 13 },
    { name: 'Hudson Baby Rye',								                type: 'Bourbon, Irish, Rye', glass: 14 },
    { name: 'Sazerac Rye',								                    type: 'Bourbon, Irish, Rye', glass: 13 },
    { name: 'Jamesons Irish Whiskey',						            type: 'Bourbon, Irish, Rye', glass: 11 },
    { name: 'Hennessy VS', 								                  type: 'Cognac', glass: 12 },
    { name: 'Hennessy XO', 								                  type: 'Cognac', glass: 42 },
    { name: 'Remy Martin 1738', 							                type: 'Cognac', glass: 14 },
    { name: 'Remy Martin XO', 								                type: 'Cognac', glass: 42 }
  ]

  return (
    <section>
      <div id="menuhero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="lightbluecontainer">
          <div id="elevate" className="uk-background-cover uk-height-full uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <div className="uk-card uk-card-default uk-card-body" uk-sticky="bottom: #offset">
              <a className="uk-button uk-button-primary" href="#cocktailssTitle" uk-scroll>COCKTAILS</a>
              <a className="uk-button uk-button-primary" href="#gAndTsTitle" uk-scroll>WINES</a>
              <a className="uk-button uk-button-primary" href="#spiritsTitle" uk-scroll>SPIRITS</a>
              <a className="uk-button uk-button-primary" href="#spiritsTitle" uk-scroll>SPIRITS</a>
              <a className="uk-button uk-button-primary" href="#spiritsTitle" uk-scroll>SPIRITS</a>
            </div>
            <dl className="uk-description-list">
              <h3 id="abouttitle"className="uk-text-lead">COCKTAILS</h3>
              <h5 id="glass">GLASS</h5>
              {cocktials.map(cocktail =>
                <>
                  <dt className="drinkname"><strong>{cocktail.name}<span className="drinkprice">{cocktail.price}</span></strong></dt>
                  <dd className="drinkdescription">{cocktail.description}</dd>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">PREMIUM GIN & TONIC</h3>
              <h5 id="glass">GLASS</h5>
              {gAndT.map(gt =>
                <>
                  <dt className="drinkname"><strong>{gt.name}<span className="drinkprice">{gt.price}</span></strong></dt>
                  <dd className="drinkdescription">{gt.description}</dd>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">CHAMPAGNE</h3>
              <h5 id="glass">GLASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTTLE</h5>
              {champagne.map(champagne =>
                <>
                  <dt className="drinkname"><strong>{champagne.name}<span className="drinkglass">{champagne.glass}  </span> <span className="drinkbottle">{champagne.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">SIZE MATTERS</h3>
              <h5 id="glass">BOTTLE</h5>
              {sizeMatters.map(size =>
                <>
                  <dt className="drinkname"><strong>{size.name} <span className="drinkprice">{size.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">RED WINE</h3>
              <h5 id="glass">GLASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTTLE</h5>
              {redWines.map(red =>
                <>
                  <dt className="drinkname"><strong>{red.name} <span className="drinkglass">{red.glass}</span><span className="drinkbottle"> {red.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">WHITE WINE</h3>
              <h5 id="glass">GLASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTTLE</h5>
              {whiteWines.map(white =>
                <>
                  <dt className="drinkname"><strong>{white.name} <span className="drinkglass">{white.glass}</span> <span className="drinkbottle">{white.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">ROSE WINE</h3>
              <h5 id="glass">GLASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTTLE</h5>
              {roseWines.map(rose =>
                <>
                  <dt className="drinkname"><strong>{rose.name} <span className="drinkglass">{rose.glass}</span> <span className="drinkbottle">{rose.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">SPARKLING WINE</h3>
              <h5 id="glass">GLASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTTLE</h5>
              {sparklingWines.map(sparkling =>
                <>
                  <dt className="drinkname"><strong>{sparkling.name} <span className="drinkglass">{sparkling.glass}</span><span className="drinkbottle"> {sparkling.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="abouttitle"className="uk-text-lead">BOTTLE SERVICE MENU <br></br> All Served With Complementary Mixers </h3>
              <h5 id="glass">BOTTLE</h5>
              {bottleService.map(bottle =>
                <>
                  <dt className="drinkname"><strong>{bottle.name} <span className="drinkprice">{bottle.bottle}</span></strong></dt>
                </>
              )}
              <h3 id="spiritsTitle"className="uk-text-lead">SPIRITS</h3>
              <h5 id="glass">GLASS</h5>
              {spirits.map(spirit =>
                <>
                  <dt className="drinkname"><strong>{spirit.name} <span className="drinkprice">{spirit.glass}</span></strong></dt>
                </>
              )}
            </dl>
          </div>
        </div>     
      </div>
    </section>
  )
}

export default Menu 
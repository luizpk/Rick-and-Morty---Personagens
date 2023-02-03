import React from 'react';
import logo from "../../../src/Images/logo.png"
import { Finder, HeaderStayled, Logo, SocialIcons, Subtitle, Title, TitleAlign, Titles} from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


export function Header() {
    	return <div>
			
				<HeaderStayled>

                  <TitleAlign>
				  <Logo>
						<img src={logo} alt="Rick and Morty logo"/> 
					</Logo>
					<Titles>
						<Title>Lista de Personagens</Title>
						<Subtitle>e suas origens</Subtitle>
					</Titles>
				  </TitleAlign>
					

					<Finder>
						<input placeholder='Digite sua busca' type='text'/>
						<button>Buscar</button>	
					</Finder>

					<SocialIcons>
						
						<a href="https://github.com/luizpk/Rick-and-Morty---Personagens" title="Github repository" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithubSquare}/></a>
           				<a href="https://www.linkedin.com/in/luiz-paulo-pinheiro/" title="This is my Linkedin!" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
            			<a href="https://twitter.com/SocialSoraya" title="This is my Twitter!" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitterSquare} className="icon__social" /></a>
						
						
					</SocialIcons>



				</HeaderStayled>	
				
			
	</div>
}
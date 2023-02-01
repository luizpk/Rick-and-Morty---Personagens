import React from 'react';
import logo from "../../../src/Images/logo.png"
import { Finder, HeaderStayled, Logo, Subtitle, Title, Titles} from './Styled';

export function Header() {
    	return <div>
			
				<HeaderStayled>


					<Logo>
						<img src={logo} alt="Rick and Morty logo"/> 
					</Logo>
					<Titles>
						<Title>Lista de Personagens</Title>
						<Subtitle>e suas origens</Subtitle>
					</Titles>
					

					<Finder>
						<input placeholder='Digite sua busca'/>
						<button>Buscar</button>	
					</Finder>
				</HeaderStayled>	
				
			
	</div>
}
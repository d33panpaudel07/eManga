import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselCardComponent} from "../../shared/components/carousel-card/carousel-card.component";
import {CardSectionComponent} from "../../shared/components/card-section/card-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselCardComponent, CardSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topRankedSectionData: { title: string, description: string, backgroundImage: string, rank?:string | number }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.fillTopRankSectionCards()
  }

  fillTopRankSectionCards(){
    let index: number = 1;

    this.topRankedSectionData.push({
      title: 'Tokyo Ghoul',
      description: 'Tokyo Ghoul follows Ken Kaneki, a college student who becomes a half-ghoul after an organ transplant from a ghoul named Rize Kamishiro. Ghouls look like humans but survive by eating human flesh. Once Kaneki transforms, he is forced into the violent and tragic world of ghouls, struggling with his new identity, morality, and what it means to be human.',
      backgroundImage: 'https://i.pinimg.com/736x/6f/e6/8a/6fe68abe300c8635198a992901fec53e.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'HxH',
      description: 'Hunter x Hunter tells the story of Gon Freecss, a young boy who discovers his missing father is a legendary Hunter a professional traveler and monster-fighter. Gon decides to become a Hunter himself to find his father. Along the way, he meets friends like Killua, Kurapika, and Leorio, and faces increasingly dangerous challenges in a complex, morally gray world.',
      backgroundImage: 'https://i.pinimg.com/736x/85/83/9e/85839e617a7be7dc04a85863fea4d0bf.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Attack on Titan',
      description: 'Attack on Titan is set in a world where humanity lives behind giant walls to protect themselves from monstrous Titans. Eren Yeager joins the military after witnessing the destruction of his home and the death of his mother. As the story unfolds, secrets about the Titans, the world, and humanity’s past are revealed in an intense battle for survival and freedom.',
      backgroundImage: 'https://i.pinimg.com/1200x/0d/6b/34/0d6b349f99d5b56d41ad961c1496894d.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'My Hero Academia',
      description: 'My Hero Academia follows Izuku Midoriya, a boy born without superpowers in a world where most people have them. Despite this, he dreams of becoming a hero. His life changes when he inherits the power of the world’s greatest hero, All Might, and enters U.A. High School to train and fight villains in a society shaped by superhuman abilities.',
      backgroundImage: 'https://i.pinimg.com/1200x/ac/e9/77/ace9779153b6783f6d01a1d34ce688a0.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Jujutsu Kaisen',
      description: 'Jujutsu Kaisen centers around Yuji Itadori, a high schooler who swallows a cursed object—a demon finger—and becomes the host of a powerful curse named Sukuna. He joins a school of Jujutsu Sorcerers to learn how to fight curses and protect people, facing deadly battles, dark magic, and emotional struggles along the way.',
      backgroundImage: 'https://i.pinimg.com/736x/2d/fb/4e/2dfb4ef099e53935d25f133ff5ddb209.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Naruto',
      description: 'Naruto tells the story of Naruto Uzumaki, a young ninja who dreams of becoming the strongest ninja and earning the respect of his village. Born with a powerful demon fox sealed inside him, Naruto battles loneliness, prejudice, and countless enemies on his journey to become Hokage—the leader of the Hidden Leaf Village.',
      backgroundImage: 'https://i.pinimg.com/736x/04/ee/49/04ee4941a061b24dbcd093ea0cb468d8.jpg',
      rank: index
    });
    index++;

    // Continuing from index = 7;
    this.topRankedSectionData.push({
      title: 'Cyberpunk: Edgerunners',
      description: 'Cyberpunk: Edgerunners is set in the dystopian Night City, where technology and body modification rule. It follows David Martinez, a street kid who turns to the dangerous world of mercenaries after a tragedy. As he upgrades his body with cyberware to survive, David struggles to hold onto his humanity in a brutal, neon-soaked world.',
      backgroundImage: 'https://i.pinimg.com/1200x/3d/d4/30/3dd4305ed45d638e52a96e6e1dedb2eb.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Demon Slayer',
      description: 'Demon Slayer follows Tanjiro Kamado, a kind-hearted boy who becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon. Set in Taisho-era Japan, the series features stunning visuals, powerful sword battles, and emotional stories as Tanjiro fights demons and searches for a cure for his sister.',
      backgroundImage: 'https://i.pinimg.com/736x/4f/50/da/4f50dadb8905421bc991460df098abcb.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Fullmetal Alchemist: Brotherhood',
      description: 'Fullmetal Alchemist: Brotherhood follows brothers Edward and Alphonse Elric, who use alchemy in an attempt to bring their mother back to life—only to suffer tragic consequences. They journey to recover the Philosopher’s Stone to restore their bodies, facing deep moral questions, political conspiracies, and unforgettable battles.',
      backgroundImage: 'https://i.pinimg.com/736x/ab/e7/4c/abe74ca646c2680ab45967fa3a47d16d.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'One Piece',
      description: 'One Piece follows Monkey D. Luffy, a rubber-powered pirate with big dreams of finding the legendary treasure “One Piece” and becoming King of the Pirates. Along with his crew, the Straw Hat Pirates, Luffy travels across dangerous seas, fights powerful enemies, and explores vast islands full of adventure and mystery.',
      backgroundImage: 'https://i.pinimg.com/736x/bd/c8/5b/bdc85b9934b7ca64c361642755c9fc58.jpg',
      rank: index
    });
    index++;

    this.topRankedSectionData.push({
      title: 'Death Note',
      description: 'Death Note follows Light Yagami, a high school genius who finds a mysterious notebook that lets him kill anyone by writing their name. As Light attempts to create a new world free of crime, a brilliant detective named L tries to stop him. What follows is a tense and intelligent game of cat-and-mouse between two masterminds.',
      backgroundImage: 'https://i.pinimg.com/736x/82/90/06/829006f7d871f3039e4ded4e902d19a0.jpg',
      rank: index
    });
    index++;
  }

}

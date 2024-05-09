/* eslint-disable prettier/prettier */
// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

import HeadshotImg from '../../assets/Headshot.jpg';
import PochitaImg from '../../assets/pochita.png'

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const call = async (args?: string[]): Promise<string> => {
  window.open(`tel:${config.phone}`);
  return `calling ${config.phone}...`;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  return `
  <div style="display: inline-flex; align-items: center">
  <img style="margin-right: 2em" src=${PochitaImg.src} width="180px"/>
  <div> 
       ​​ ​コンピューター 
  ┌──────────────────────────────────────────┐ 
   <span style="color: #dd6777"> ​ ​​  OS</span> : Arch Linux x86_64 
   <span style="color:#dd6777"> ​​ ​  Kernel</span> : 6.8.9-arch1-1 
   <span style="color:#86aaec"> ​​ ​  Packages</span> : 1409 (pacman), 6 (flatpak) 
   <span style="color:#86aaec"> ​​ ​  Resolution</span> : 2560x1600 
   <span style="color:#ecd3a0"> ​​ ​  DE</span> : Hyprland 
   <span style="color:#ecd3a0"> ​​ ​  Terminal</span> : kitty 
  └──────────────────────────────────────────┘ 
    
    ​​ ​​​  : sc0rp10n@archmachine69 
  ┌──────────────────────────────────────────┐ 
  <span style="color:#90ceaa">​​  ​  CPU</span> : AMD Ryzen 7 5800H with Radeon Graphics (16) @ 4.463GHz 
  <span style="color:#90ceaa"> ​​ ​  GPU</span> : NVIDIA GeForce RTX 3060 Mobile / Max-Q 
  <span style="color:#c296eb"> ​​ ​  GPU Driver</span> : NVIDIA 550.78 
  <span style="color:#c296eb"> ​​ ​ ﬙ Memory</span> : 868MiB / 15846MiB 
  └──────────────────────────────────────────┘ 
    
   <span style="color:#dd6777">​​ ​​ ​​​​​​​​​​</span> ​<span style="color:#86aaec">​​ ​​ ​​​​​​​​​​</span> <span style="color:#ecd3a0">​​ ​​ ​​​​​​​​​​</span> <span style="color:#90ceaa">​​ ​​ ​​​​​​​​​​</span> <span style="color:#c296eb">​​ ​​ ​​​​​​​​​​</span> <span style="color:#93cee9">​​ ​​ ​​​​​​​​​​</span> <span style="color:#cbced3">​​ ​​ ​​​​​​​​​​</span> <span style="color:#151720">​​ ​​ ​​​​​​​​​​</span> <span style="color:#0d0f18">​​ ​​ ​​​​​​​​​​</span> ​

  </div>
  </div>
  `;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
<div style="display: inline-flex; align-items: center">

███████╗ ██████╗ ██████╗ ██████╗ ██████╗  ██╗ ██████╗ ███╗   ██╗
██╔════╝██╔════╝██╔═████╗██╔══██╗██╔══██╗███║██╔═████╗████╗  ██║
███████╗██║     ██║██╔██║██████╔╝██████╔╝╚██║██║██╔██║██╔██╗ ██║
╚════██║██║     ████╔╝██║██╔══██╗██╔═══╝  ██║████╔╝██║██║╚██╗██║
███████║╚██████╗╚██████╔╝██║  ██║██║      ██║╚██████╔╝██║ ╚████║
╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝      ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                
<img style="margin-left: 2em" src=${HeadshotImg.src} width="180px"/>
</div>


Hello and welcome! 👋 Here at Akshith's OS, you've entered the portfolio site of Akshith Mysa. 
With a profound love for Linux 🐧 (BTW I use Arch 😎), I  thoroughly enjoy navigating its terminal environment .
As a testament to this passion, I've tailored my website to mirror the interface of my terminal environment.
Type 'help' to see the list of available commands.
Type 'resume' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">here</a></u> for my resume.
Type 'sumfetch' to display summary about me.
Type 'github' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">here</a></u> for my github profile.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

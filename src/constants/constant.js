import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { PiStarFill } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const ServiceCardImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/0677/4150/8ab9a9d80196a8fb9f01e940dbf0d7e1?Expires=1695600000&Signature=FHtS1H3VCTbaxg-GVudn~qYqdDoK8CZjXpq4P~GnTvrFwNLD-WWpSmFXVRIsMgm8elyjzJ~FPPDMjr9Fnk-sDPW5oJZELl7oYzKoffOG~~gDvjMAte7Q~xAs4FvQkZfKkv1vPyLzZv2tcHGUgcOAB9QPrc3o2gnsvm7a~gJj8zzqhitQ1l1r6Uf5PrWNJ-uBxXt3oCIfCLecOKdPNRqnOYD0NTfe8ftcbIwbIW9ahs7cls4vhHsQmxAKN3drRkMABEOZdzkf5pSInak2lpeEquJR5asUg~EMZV76qGHxK2wvYl05sbdF4EObSCp0xUN4nYq7VVfLVJYsTOkgINxqdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Hair Loss",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/5c41/0b62/48165230d1b4763459c0b9d0503e0b05?Expires=1695600000&Signature=KcrqSQskOFWg~Rev8KUHDnNc2Vw1c~SOUHRXGL-h7c2Gy3~Z-Ggl3vxoLQbP0sQnndFBN73YoV63xrdIDu3JTjad5BqHJbcmFiNpCCuon7WE9yN2OaXsXYTHZwOBXgcDx~2r0iaf4N4CP-oTg9mZP-QucuFLonDrGtp0~V5sByFuuA4h0aJhdgF-2GN453rHziNu5eyBSS18LeBsRSLXIGrAoVXHi2rRcE~SjrZLLz048POZ5-ayZ9Y-6LD9-vlcV92Wis5gJn7IHLn70wqyquIl6fSAurJ3hIAegBece~xdLc6HOh9LRONGF5Ckf2esEtkSc3c11F78YFhKnlmlpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Pigmentation",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8d1f/0c15/fbbdbebb3f93e537f447b4fdcda75b81?Expires=1695600000&Signature=fZTqRwU6PG7jw-jhpR-SBwJDZTP~PCQukmzwQ02jrv09JbBvBWNVaHqPbY8p6HEXLV~zSGZZxYBWhQP7YaIx6bYwvsxxe~Gb9Zz3C-OqfGhzG364UnjLcwmhzzEgJA-029tqlhb635rtjmwCqD3uAQLFEVmA12~qAsuE8KEYUeW~zop29Dgg4nNvXTV-kcjHrf9a57EyAjiHYwdcVIAM~39M9MHa8kG1pvFE7J4jnvgYgNJ6oxZ85N3GOC288Pdj8UVSO5dI~ov4BTLsP9HcN~GqhOB4CB5UFRokybDMbkHaRpxkmyaDso79J8a6JU0dAeGrhSVw9BMON6kiMFw9JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Acne",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/4817/731b/d3acaa81009111494bfd9a5a63a9ce7a?Expires=1695600000&Signature=NMzHU9FFpfAZWqqaFFWhe8q-6sVDlHaP9mDNXh7SdcGeY8DAyUazS9QgOP5ZJE1L-Yf03UOZmv~zr8MVz~jAc7OHj3U7QuXEypYE9hsHPC4X51rqxK71jXgTb9cl-bXo1Wtewc646Nwi73Q2lVu~2nY1tNRlp-PDm954lTmXAzJEKv2o3NTAUMUQbfZd~Gw6HYfannb8bSztwnXt8kCnR2V2chmXu-YJKUXjSB-zHwl7P2da3SZ1t9yh4-r~KBhkKEkRZux04TXDMqdLiP88JIT3Mz8Z259wwhLKETm473PSSkTVWeEr-dn3OxaTgMDWPLPsL7c0DGe2bi~xdvtasg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Aging",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3804/b0a6/6f1698dffe01fc5ae44e540d0c25a5de?Expires=1695600000&Signature=fc4S8FRuvONvMLKRTvJy-UNS-7QOpArJt36F72yDeqFdyJildYjp1rm-J3c4U0pIVFZrCRo2aU0bFFf3ymAvC0EcPN6a1MLMyv-dBAxulQnftpRrwANvDwG~I0AC243ffXuAM0A4g3-fJNhv2-R3hsUCxC6dXGOJoFpG40p~8hpLmI2PENQU2OPVhojTAy0zWbVGNZzdzOLNcsRHyXfKiUITCgbBrEbmx3XzW7DpkS6w696YFuMEorHD9UVDhyDeyi5McXAqDQI4Wvsz0aysd7YF3KcH6d~k1HvgA-Pp2ZSaFZLJw1L7zKXxI4b1RAtMYCDKJ6fPt2ko-X~9GWseYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Fat Reduction",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8c21/d76f/78a90a74c6a4a811449adb050f2605b8?Expires=1695600000&Signature=j308guln5L0UqIHHPxbdL5IDKvI2QGuLnImZnhdjcdoMUhAvsa~91IHJcQ~s5jksc1U-~triPZqWJ0n9HLL8aBZvVu8q-yjxAzVP~TjOZmCqPY-QndPpg0~KNMzCxMQ8W5h4aiXO0Q8ZZyibb8kcoUBkQICQaNLcLwow0DXfSnAc~LQlSg28rYD7dmHRRYVu-DCeOnW54r9VExn3zoU54J7qThsuxJ~voPeZUyDCd0K0TTcm-XGRQMkx~GEoeIAMqsjs9WuvQDsQR4GaxYdfFkOfCPvg19CVvnZm8yvFWsGaHFpBzgEMw2rWIZzyX~~9z0j~uuTSk2SauSPTzm9nkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Acne Scar",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b46b/41b3/cedc4aa2ca105e35a79d81cad7b24d85?Expires=1695600000&Signature=gGNdqrn-LopoHE7m4PorCCKi-DH1Ol5NAZMzcYgyOImzTBdF1UNpHgXv4uunXacs9Pn-V~aCouqwD0d9QMF2pKpBDZnuT~Zo9c3P1mzvtpd3l1riUB1bVDx~qWHETtDG1Tjbj-E0ckIERtv2vYibwWjWYjZ5LecZL-poCqZQW9mIEN4qxykaupldIlJR-ZYB8A822pTwxgZiJaIHwfqSeVnpVE3I5-KYFedZNVGtugSNAMY7m3E2aNdj3qaFudYCwMNLo15rrgI7aFjxDsOdj2LrWmGd954WER3HeVw-4D8Nl-wCJUxu7DJDynmZgSe6xWX1OYhuGEcgrlVXJxNnfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Laser Hair Removal",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bc3f/2aad/cff57b10a3331b29b4ce48cb74b07651?Expires=1695600000&Signature=NNPUETZGzn~MndYwrb6B2WkAafLYhgaOAVWXnIM21v~ixzR42JBfJlIsbVNpskjZ~l62bAIu3Vg6hp-hMxfKe9FcLUQi-9iwqfNt1JfJn0JwuUjWhIxN0aeVVCepbChiPlSVUHKTg1Zp0iLCUv8niZi9Fk7EOvDzwnIUMDH7piKse7zb8pwwgc-Mb2ena8JRVWNg6EiU0v5lTF-0~k1Nd7TeP7aI7o14iQ3OjztIB16NoA2tAR7XOSSyR~ZGQira~l6BazZ0mUtTpmLYP4nLwZ7opnMblnwRJwjrdNt867XO~IIUyWwjbpmjmxrCs6YrvATl8KOird63Ca0RWOMj9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "IV Injection",
  },
];

const OFFER_IMG =
  "https://s3-alpha-sig.figma.com/img/e1a2/93bc/fc06329d69926d35461101cc1a257b0a?Expires=1695600000&Signature=Zd1GnxZ4P7DbJMXPiYnXkl-WL7UcBCs2V0frn4BJyjmYr7vqiDwDquX1muN~im8fwC-m4ENof8rvG9uIyUusTLacprn06p2sHRPBKiVybzqO3RfEoj7jYz4OcE3LvUDqN0i5a~CMDrMxNWMEaWXSwqY9bwCiR0e0CwVHBuhE4DjO7D73ckTw26zB518KEb~8I2r6YsoaE4ZAgTQl0ezKHCJScDa-mPWYmNSLdvDYEPlfDnBTWqEkfHuJqt6Bqmvhsu9ZXNi-0ft2dcCHpElgwRgm16pnzoC~3tqAFwODGGfCth36yOnQWsZUvBJbvJ9g1jlba6NOdpQ-PveyR7BJtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const partners = [
  "https://s3-alpha-sig.figma.com/img/29d8/6c80/1ab96a64a96367a7c827e6f78d5919de?Expires=1695600000&Signature=S8bTOUcuNfkNmq2dyr1r~HtHWT5J5MtP3nJIGfzTEZ9zn8VmNtpN~~dYtUUubEOnHaRNFLD9hrbJaHhQwFwDjBOcSPQhhOS1NkE2VHVcXAm7iMCkHzGPmaMEMGF~KxYmV-6ngeX4y76cbk5-MYVBQKhRLHkUegCTwjumbQNv1CKqzVx9ARJz0V91VMax3ZfAhdGUgRA6O7cY~YRoinZa5xZMwQ2AMc3MlJOtCn1hFCdKWKyVbZ-pzrm7BHABLpK~RE3KKJWr5ffOmxKORgNEMdSmo65CGKlOHLw5RRZYJleJ-vfr367Pt--pd2DF9kDBJZF1Zp8f4xm6h3itIlR3XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/16de/64fd/fbc675c266f288c1b24d4582017658b3?Expires=1695600000&Signature=AjKgGrpiQMb2RSIQyYbGlCRFLcQvJ5NtAkR-T4FywhraPIQyXS9qawfzjSftca~g2zXKH8cTOxlYIik1aj7uTXtxwt8RLPeJ3ZZjWX2D3ApBkpQtBOYUetCShfn4emWydU~FB5hS6EYGgu7DQzLZ2aX0LZN7HekV~fGsHv~u9THBwAgHYa2FNuIXhpM~a66r5G4nzecqUp5XwB5JDP7vV9KYvdRmdMk6B3-0nR-w0e9aRlHwhjiFmW0ZKk4Z6l14ThTQrF64yNjXRmIDmf1gq3O5OmAEQ~cfZNFO4ur-XR3V9~IPktcH023GnFpa-ijrNr9Ga0UXbcR~xlTlbZELzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9fc1/eba4/74c8e57d3edaf0cedf66ce4efae37e5a?Expires=1695600000&Signature=Z6lT4syo~lhwsFOKJtGzCfPvXKyT~wYkY47lgo6xuqPeIORlFePUo5pA7QGHo0ihbJPjd9tlWg610bbJSRbgrJZHiIgLdEoifqoUiIq5bh6zE3qn13Rh366nMcEpC86ubV6L0qH0Pr8CCK~bYszy0AQVcej2ahwUwpNhcct4NWCWlkSt7AfpIxVpj8bGX~7iVwVeljUzw6vYHDLJwrb9rtOmU7BpAjQtX97SzhS9cfqRifnoc7fjPloSXlxWDauV7vMt1aDzyGrVIE~v0q5m5PteZblZ5oBrRmNdQ~7427JPRajD6sBplMGg8xW8UCJqCwtWYurq~WpMuN28LTc1xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/faca/179b/91e87643214d7bcf192d83846f92b156?Expires=1695600000&Signature=UbiTrDDjxHJlNdLFBMFpXegLbHvFq9k-Zp8lWGegslosSPyjzMtcM7btc-rFRGN7atGhp4AlInwQNPVXnUdojUDRRjg6aUISNclq0WB-U5jewde5MHDU8q6TTMGuH-Da9ZIUuhawzNUH~~BYwzoEHkxxvPZWT~Yw7pRxSshPY9pnTf-F37iBbfwOkyDAn~9YWWGdyHkGQPtiL7POqtFcPF8QFzgL8N384lTZzIzzwSiRVia6t2f051rSeYlRaMX8VSDeda4U7u50URCxH4ZSmv2TGaOt8~eOcxrbJR-2wTgUjpdqn52Lyj5dQiio781g4Ss~S1GrjrpdOBJhv~ozwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5d06/760e/d5bad843bfdfe4e52a4da7c77bd9d40d?Expires=1695600000&Signature=H~e6don4u1Yjzif7IoSZ8WC7lypJqkf99NNyqDgRU6~v3J-4gICC1zjnMaYeje0VB4odveMqZNkAo~Qh1G1Ct0mjhp3m1Qb8jqxadBch3xyRLtpzCmRSBu5auOSk~R9cX86d8aSNuyBQTG8S16NPmQrggfSTlhBKn60BLBN0ukPgYC6qL8NrYMO~p9AoALwUUkLVaO1y1~orHgsbNt6wWlLibWnI0FNy3ijqUkXFeuk7~riihlwPOolw4uUFaKDPxaQwmcs-6l5FTWL7iPoi0WxnHMKUmkvl~0TehZcFTnEk~Sae-kTl-q4i9k-BlhPS5v~vFYNVPT~xuKb17bLcEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9409/24ee/1a9776f86534125d03b103171428150b?Expires=1695600000&Signature=JnCzVDn0tmjAE5yDcVgj4wlWZJgvX5DpAGF29Qyxi3DMzBEKCgKxojyMCQkiZRXEMQFY2GTaOdH8JQp39W3K1wPE86iwJcMlrETqISDjbn6F43wYIGKib2cJR5QLrYjCNtndo-4RM6Fh3d25xjWHMIP6B1AwNzB6SEY6OwaZbB4JIFKuE1kmyNDpUpMTM-36jKI9zaf7l~7ddRuIs62buzvzyVm5kqgcoJkVdkLZBZEjGx2BE3WV4vMRfxV5NlG~1X881Rit~0XYbCQzvTKxu6hcsBtVagfQDdJ9aC83frLdKwadGNAiP4Xois6R8aLEGCGYK3jWVQv~wNYBmiWgAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/1f5a/fa56/1b26d364ef832ded93d5cf4bae4247fd?Expires=1695600000&Signature=ZYlu~uiZB408TdZbhjl7a2VKXJiggs-v~Ydw5bll2crh1A5f9YSq~1XfGaxwUvrG4VXXk45aYKg0nxbe7NSkh37ODuJiEqHQzaNHd8eCQpTZ~WpghfEpdGDGjMQjNBnVG54wdapaokyl0V7XBa1kvvDAGkeYXYKOqXOMRTH2lknC636VNAPQwqlMZn7EmbmlIJV7TIT082Ned98JN7ZkV7lpLfqShxKuYuAbJLCk7j~v5ebflM9gy4YnBF46dxXB8-aywi14YCDPHwKMhcGafd51nDYos6PU-dcL~9bKTYGjJUKaMCaO4AL94f1kwTWJ3pGfeAMwZJQSKfN3E7~dSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/f8d0/e2e8/dd18a52817cf64e6575093ba1df34943?Expires=1695600000&Signature=cOCRWIbxVXXRw78a3Pf~BaApsCg4JM47KmFkmhkon1few45zVT~tkLgffDC2Avkld8lzeXPQEn-vIZo0SLDnedw2Yu3vdmMdRd4JD50Vcl1i3j-x6djsfQLYDffnBJYDtcCVK5VEpe3dVelcpFzMa65X6pJM9zTpHw~OaicwletJkccse~Vk-sE-vutqMkWrNuOEHuzFMaKLY7AtLylTFE2aIX5i2cd6ZFCZz5TuYjbxtgal7CLdrMNslviYIBaSyOItZyDbjCoxe6JUlFjclQo92OtOXHlXaSDQYv9YFSTto~ZES551bb3s7PdN4HPs~bWj6MgAsUsWxE7uUFhLwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/66b1/f7a1/bbe662cac1b9f1e544cad0c85f7a7e3e?Expires=1695600000&Signature=pEcFt96JRBxb3G3ODMMh~BsiUKyDvP19PEM3Zx6AoYte1d5VuFhJqtbn7pBuWP161Bs31mTE65vdMAC5FVOyd-zg62avh0hgsSvR2hBePZin59wfzMS5phQq5b3nhUM7CckG8bJrqtJUau~Efr931GPeb8egm6kCT41RK5HeUHbK8-JqiwvaiMaf3nNsVFWeC~pABR5a0Cec0A0KbFZiQJC70SXpQEIf6BDofwSuZMQxcL5TKTT43SUyxzzJ-EnFZs1oh~mDI8J2tdatoSzo760y~bnT8BujiMAnyk5U0xCQULw6AOSe7L6WNcFMpZeuFCZYVHLE1on49ZsQ6dYEIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/3eea/d654/3bf764e23b6b185a161e1aa239c3c273?Expires=1695600000&Signature=ixCZEZbINupMHFBBPEc7W9133fIQjexbLRQBaqqf4gDmF8HFkDXvLXBODwJMUsrwVx4C~4~iSz3Dn5CNIwtbeAhJQBPJVVNuKxf9CstUVBRzbUNKaACeER0qk301GNZ0LIBlSvvCqxv1toXmDqPA5pVQlyh6dlgmSPK6BU62M93KldMbIGKW2meL0hJA-El8kA197r3FCIQ7ZAeTixIWb2Y5SDyCQH0abwWJlbxbfwBx1sZfP~js-70x5vH74LyUekOMVJPy9njuDUkCNQgMKTIXQCdF9zbb-mRAcC8TC27VTFUY6DMxJXfkgGq-CAX~eYVARG7ILOkNc8zXzc7L~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const OUR_PRODUCT =
  "https://s3-alpha-sig.figma.com/img/b45f/e173/82b3f89f94436be693ee3a512f45dcb8?Expires=1695600000&Signature=UlwGvxweDXSsAUZc~SqQxr01~x~3x9m9~Z8ltgPia9kmntXJKzzllLbHhk1a8iGojOoV7ttP8hdzhCMja1oQXMaRkggPwZWfJJlvg~vBvMXT3xokRwfuMhL9Oi1eDdra0wRwUvb9x0AYue5vvbEU2zgVWVQHpzl2kZKJ4pbtRw3I86XLo2WInEA4y-CGM9cpvQpPq3CDzv9a4RGruTkAvm6A1PtTi~iMfIKIzI-vJ03U3-tXCj2QqwPHnxIFec~mv0fDTxh6VoGRoQY60a28zaRJHIP9hvYqgCsGCCq7jZWnj2klLczCakCh5d2PmSp7J6K4ysYJGaPSxSteYn5kww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const WHO_WE_ARE =
  "https://s3-alpha-sig.figma.com/img/0677/4150/8ab9a9d80196a8fb9f01e940dbf0d7e1?Expires=1695600000&Signature=FHtS1H3VCTbaxg-GVudn~qYqdDoK8CZjXpq4P~GnTvrFwNLD-WWpSmFXVRIsMgm8elyjzJ~FPPDMjr9Fnk-sDPW5oJZELl7oYzKoffOG~~gDvjMAte7Q~xAs4FvQkZfKkv1vPyLzZv2tcHGUgcOAB9QPrc3o2gnsvm7a~gJj8zzqhitQ1l1r6Uf5PrWNJ-uBxXt3oCIfCLecOKdPNRqnOYD0NTfe8ftcbIwbIW9ahs7cls4vhHsQmxAKN3drRkMABEOZdzkf5pSInak2lpeEquJR5asUg~EMZV76qGHxK2wvYl05sbdF4EObSCp0xUN4nYq7VVfLVJYsTOkgINxqdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const latestNews = [
  {
    src: "https://s3-alpha-sig.figma.com/img/3c46/2883/d5d30d58bd93eca65474feedc16054da?Expires=1695600000&Signature=jIq2hAvOAY0w5TDVbw2XKx8fiCOM9WwOWQO3A9zPq092EobGjNFrx~sFzFo84KCyLzhhDXRHxWP3gtOjptr9MCXgBH-jlHgJuFe~FUQJms4eW4lXhHE4IhzFO26Q--yVFlGl2CEdPyGr~OZi12rZMQTtk7WAUNSymlz9OqC65biKCoclysgMxGIDSg3pnmomnmZR-9wsYGr9BGnmTeULSQWrhlO2GEK2nepj5SLJMJjtf~LJB3~SvI80SKY9kVD5ejif1PxLc3O~EHD-7NROn9w2YwAP8yX1m9DWMNIFXgrIpkezD7ZGCaVyPMXtRwHT0C7Z~w-zSMaO5tfTt1t9HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e871/9058/5ff7f219b9fcf1eac085a7dcdc690073?Expires=1695600000&Signature=O5E4lXAPtEjgJ4rKBZtppACVypRMWq~lazW9FULTK1EKaTp7TKbkgvIq6QzhjMn0OMTEGIfM1Y~zJcjQMa4Jnyq4CZ4vtxGmhkYGxWB~aekJThg-KFGIsc2t2mt1UD~DvSyrDOTt-ZP~Gp8KI-4k8XoZx3SMlRC1CQZVg9LCx0ecYKELA7ZPQEk2Z8w9dPryaKVqjEpQijmIIGq0J8q8rHmnwImrImp-lm7Hswe5HAuv70pxNpiUoI4nf-EJI-Zlg5qmJ4E0f8CZMQlrbEzVQ-d3EBvw8uf3FJ2Re1I0s775GjTPJjOyfIc5ZyE-4Aq4l3u~0W17A2Vaj34sV9QLvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6b61/ebe6/3d06888ee2f470727473f233176bcb20?Expires=1695600000&Signature=Hfn9bbDvBn4UInl4K9vHbPO7PeW0q~OTgHi1mVHtT4Mav2On~axvjzae~dNOonJPsfnZC6SEF2lsy-aHrQ~Ucn1ua8XyFfqjTClCpOGczDw-yDX5ZP1YcUzQF604loEzG5xl9r3zODRtHUu2fVX3YG5sLF8qo29gO08jz30pq-9hyBBTrsvG4VgkENoQ0kBCZe3W05mywXpMOHcRRnACv7z6ISK68A0-cicc69rcMq87nBnppTqjGwA5GSBDe66io7BtoAFuFH60B0off8FRIEd7jADg4V61lVeQZYh7vNwF4dEhJgF3rSczZxHdhQq2atvI-CD7HS7jhkuJvPZVmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3c46/2883/d5d30d58bd93eca65474feedc16054da?Expires=1695600000&Signature=jIq2hAvOAY0w5TDVbw2XKx8fiCOM9WwOWQO3A9zPq092EobGjNFrx~sFzFo84KCyLzhhDXRHxWP3gtOjptr9MCXgBH-jlHgJuFe~FUQJms4eW4lXhHE4IhzFO26Q--yVFlGl2CEdPyGr~OZi12rZMQTtk7WAUNSymlz9OqC65biKCoclysgMxGIDSg3pnmomnmZR-9wsYGr9BGnmTeULSQWrhlO2GEK2nepj5SLJMJjtf~LJB3~SvI80SKY9kVD5ejif1PxLc3O~EHD-7NROn9w2YwAP8yX1m9DWMNIFXgrIpkezD7ZGCaVyPMXtRwHT0C7Z~w-zSMaO5tfTt1t9HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e871/9058/5ff7f219b9fcf1eac085a7dcdc690073?Expires=1695600000&Signature=O5E4lXAPtEjgJ4rKBZtppACVypRMWq~lazW9FULTK1EKaTp7TKbkgvIq6QzhjMn0OMTEGIfM1Y~zJcjQMa4Jnyq4CZ4vtxGmhkYGxWB~aekJThg-KFGIsc2t2mt1UD~DvSyrDOTt-ZP~Gp8KI-4k8XoZx3SMlRC1CQZVg9LCx0ecYKELA7ZPQEk2Z8w9dPryaKVqjEpQijmIIGq0J8q8rHmnwImrImp-lm7Hswe5HAuv70pxNpiUoI4nf-EJI-Zlg5qmJ4E0f8CZMQlrbEzVQ-d3EBvw8uf3FJ2Re1I0s775GjTPJjOyfIc5ZyE-4Aq4l3u~0W17A2Vaj34sV9QLvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6b61/ebe6/3d06888ee2f470727473f233176bcb20?Expires=1695600000&Signature=Hfn9bbDvBn4UInl4K9vHbPO7PeW0q~OTgHi1mVHtT4Mav2On~axvjzae~dNOonJPsfnZC6SEF2lsy-aHrQ~Ucn1ua8XyFfqjTClCpOGczDw-yDX5ZP1YcUzQF604loEzG5xl9r3zODRtHUu2fVX3YG5sLF8qo29gO08jz30pq-9hyBBTrsvG4VgkENoQ0kBCZe3W05mywXpMOHcRRnACv7z6ISK68A0-cicc69rcMq87nBnppTqjGwA5GSBDe66io7BtoAFuFH60B0off8FRIEd7jADg4V61lVeQZYh7vNwF4dEhJgF3rSczZxHdhQq2atvI-CD7HS7jhkuJvPZVmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
];

const pictures = [
  "https://s3-alpha-sig.figma.com/img/cefb/252c/c6ff445f8ab83dbc1e38bd4cd28c7295?Expires=1695600000&Signature=cQrNGRwD3ikfl-TacnIuCDvYYsKNQDudYa2yRt5G~agOpc4ArhBlwgoHZCX2cfu8DNG22wr3duVdhnAaoEmO72cgUfPQ7LCQxmJc71S23HDdv-CNKVf-GRsUILbAnH5L-ZuiTr7z2U4IrYwcKcbmc-mjzr8cN8VUdCGot2vbpeEkb0cMZDnBDTMe-OjEZaaVemuo~9t5Ai-MZlNXvS-8pxNWAFLYs0z4yZvCbbM-F3o3dprzvCoA4mib97GQBjUrRGVM5562xKcO3RRrI-ivgjeExvP99cI-V8-PNOqRpBMS-6sw7xzglQQX7slCgdfsSZAE55uDe5rv22ija0qOmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/4208/ade2/b850b705f32e673c3f8153f791b59430?Expires=1695600000&Signature=E-Qh1LDPz1A5Dg15U8pnmrpdiKWUtgKB3elh8LJ7aILgQC3NzJR8SyzI6tQmvesG8bsbej7sz5Gw-DnQlQ67QyjIy2V3KWALV-3fqTpq5dB86l7jMJv7fNeyndGHBwE2XeGwsZPx8P9NLHX9ogH~VksmS-j1nGYQhW4AMaBK3aiKypPPKC8v-chAAov2C1Gwedusk~CaGOV9jUWvYFctqrnHIcwSoHAAWnc5O40ljnM2XglRnrJXYInnSsLEZgvMXxgsKQEZ7qzSAB-2Nq2TlPlBJz1U5m1WpP04Vomi6p85Wi2S1s2D3SXamZEcV1D3u0uC8AMTCCCsUl5TM-dA4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/e738/757c/9b48fec2cb21e6c62ec950544b2ce26c?Expires=1695600000&Signature=q-MvLWQGUbAI6m6lAyjqAh51mNdKVO1pPrdjTWoWOm7V3bQlJzCg5jYp3D3b~yagXnrrKddcbWywAwq5QGEjT2EIm9rxx35PyekbAGFPQaewD56sCKk49fJqz4gu3wMGlYSC14gM3CYh82hCzk3AQdmwfhTLerKotDLUAvRoVYzkG5m-KQ0hWmu5L1OtdFcAdvABNDjFQ3wd1cX2F66gG09eFPEclIeBi36WJblyRahYtRjdSIsev7Jm9kxczhYV7O6ye~AjD0~IWoE2BFk546HG~dOibMfO67RLJOYeBTlG6qFGdOdDlSnxJR1Ery~sP3zsJaPjIIx~rRQuSZT66Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/d704/df32/c3cd07712387413c1e6cdf36362d2934?Expires=1695600000&Signature=Q0wDErBt8rXGAzc10hrWKE0kDXBzi1Sjujxw2PHj1h0Hzx6Va17SDyvP1P3ecv6JMM8Tlusi286YKKctQX-HXjYxPgCWbe7sMn60~QPVmds-Xk3MfbAJ79JPPen~XxaVv~HWiC8hJSD~g~xV4x-89p7eFIzm0Ro4NvStfHaVXgcuePiZLSN4jgdfhV9e5uZgN~fH3BBTzWExuiBc2SGGFQza2XdDc8ArqET9OSqdSTLevq-FASq8Jo-drfRoLLTvQc-bcCJU~IdXWVouzHBx-rbbyhXALnoh7a1wctXCSXSYNb1u9zlkBKGBHoB65mSz4sF9O0xR1LM~2SwBYmDyxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/cefb/252c/c6ff445f8ab83dbc1e38bd4cd28c7295?Expires=1695600000&Signature=cQrNGRwD3ikfl-TacnIuCDvYYsKNQDudYa2yRt5G~agOpc4ArhBlwgoHZCX2cfu8DNG22wr3duVdhnAaoEmO72cgUfPQ7LCQxmJc71S23HDdv-CNKVf-GRsUILbAnH5L-ZuiTr7z2U4IrYwcKcbmc-mjzr8cN8VUdCGot2vbpeEkb0cMZDnBDTMe-OjEZaaVemuo~9t5Ai-MZlNXvS-8pxNWAFLYs0z4yZvCbbM-F3o3dprzvCoA4mib97GQBjUrRGVM5562xKcO3RRrI-ivgjeExvP99cI-V8-PNOqRpBMS-6sw7xzglQQX7slCgdfsSZAE55uDe5rv22ija0qOmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/4208/ade2/b850b705f32e673c3f8153f791b59430?Expires=1695600000&Signature=E-Qh1LDPz1A5Dg15U8pnmrpdiKWUtgKB3elh8LJ7aILgQC3NzJR8SyzI6tQmvesG8bsbej7sz5Gw-DnQlQ67QyjIy2V3KWALV-3fqTpq5dB86l7jMJv7fNeyndGHBwE2XeGwsZPx8P9NLHX9ogH~VksmS-j1nGYQhW4AMaBK3aiKypPPKC8v-chAAov2C1Gwedusk~CaGOV9jUWvYFctqrnHIcwSoHAAWnc5O40ljnM2XglRnrJXYInnSsLEZgvMXxgsKQEZ7qzSAB-2Nq2TlPlBJz1U5m1WpP04Vomi6p85Wi2S1s2D3SXamZEcV1D3u0uC8AMTCCCsUl5TM-dA4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/e738/757c/9b48fec2cb21e6c62ec950544b2ce26c?Expires=1695600000&Signature=q-MvLWQGUbAI6m6lAyjqAh51mNdKVO1pPrdjTWoWOm7V3bQlJzCg5jYp3D3b~yagXnrrKddcbWywAwq5QGEjT2EIm9rxx35PyekbAGFPQaewD56sCKk49fJqz4gu3wMGlYSC14gM3CYh82hCzk3AQdmwfhTLerKotDLUAvRoVYzkG5m-KQ0hWmu5L1OtdFcAdvABNDjFQ3wd1cX2F66gG09eFPEclIeBi36WJblyRahYtRjdSIsev7Jm9kxczhYV7O6ye~AjD0~IWoE2BFk546HG~dOibMfO67RLJOYeBTlG6qFGdOdDlSnxJR1Ery~sP3zsJaPjIIx~rRQuSZT66Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/d704/df32/c3cd07712387413c1e6cdf36362d2934?Expires=1695600000&Signature=Q0wDErBt8rXGAzc10hrWKE0kDXBzi1Sjujxw2PHj1h0Hzx6Va17SDyvP1P3ecv6JMM8Tlusi286YKKctQX-HXjYxPgCWbe7sMn60~QPVmds-Xk3MfbAJ79JPPen~XxaVv~HWiC8hJSD~g~xV4x-89p7eFIzm0Ro4NvStfHaVXgcuePiZLSN4jgdfhV9e5uZgN~fH3BBTzWExuiBc2SGGFQza2XdDc8ArqET9OSqdSTLevq-FASq8Jo-drfRoLLTvQc-bcCJU~IdXWVouzHBx-rbbyhXALnoh7a1wctXCSXSYNb1u9zlkBKGBHoB65mSz4sF9O0xR1LM~2SwBYmDyxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const paymentCards = [
  "https://s3-alpha-sig.figma.com/img/dca9/9f94/8e5578b7ddb396a7a9904728cff839fd?Expires=1695600000&Signature=Lyud-Aqhe27h3jiSRlCJJVuxw9zUP59ejr6hW4zsRikkfIw7r1G0oiUl2iZTdABTE9QUsa6YxDnCa7k12bdSgOAhlONaaAmKo4jRYlO5cr6mEjyP~HUcmNATOAVaY5Cagr6FLI4QnaEoQrZI9zBuck6KqgUYx64fzZ4FZqE7miVr3F2dco1eyR5vMNLFIQh5~ewjbmLc5cAeRRoMMWNuFJCWOYr6ranxCHFpHcYj1CZb0cH9VIAQS5KBAVOTlGJOOzydHnXlw2wMuucqu4B07Z1bgO4QOZopQQXkBTe9TTBCN4YUrOw10Uqp95CXRWtVwwdRktbOVQo0nHKCYxCa0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/8ce3/5781/c6fe0f3525c82aac0757ce7300414261?Expires=1695600000&Signature=qojMn2XDMMaygVjzwepuG0oFjOJrvQDS~4EWBeJfQG7MYy7NWX-KAt-Qxqdr5VOK1Z-1Z3fqe1UIUqlq2W6FMdaQAX4pmiD9GsE274de0ywkfj0Byir~EbwalXZw04Uish6J09chTq3cjasneRrNnF4Jryo1-DmWq-0Sf7qTVyEcWxE0cvw0qbBYi-3Pyc52JsW5qrvkqK66WoPY~z94DzLU5RwfyIBCwlZOn18A2p8tE00TlT0A9rB1lEKvxx2z6e8zm1aQX~9IkHcjtL0jjgvqRr~Anl3dJwWQHOm9CnTQfoF65YXcJXCbJktibDoCawf4SVgP-5M5AA7ygtFofA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/f558/9e28/02e05f3269fb3187765895bd3c2a3655?Expires=1695600000&Signature=ZIzXECAYMQO-MLRRv6HSgaS6gQX~uwpihVxDWrzIY9FCmhj22yaTXfQLgaIYuKnZ~zF6bm0QjxgntXTqatykjynS0UZaSf0z5zrJyubW7dmJihfS2svEploFSpQB6JcxzPjeb4pXsxetQSXgb~7PU9MhOuU9KvKx4spljNNJllrACOkqnshal-x-4W23gw6JXXYtXlqEfPa64FW9ZrzTX7Oj9AHL2hDWcZJUe3jgs1TsPHUDNR9btkU418KqnS7gYwdZXX8S5UdKiE5H5RzrBxPX9ulfQmWjAgLv-DNLk7TBdeqF8MeEz-eNbVa84bZXI1E3L2cp8gv28G3~g-JR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5d79/9d37/01bf0be10ffc9e331bdab9ffa09487f8?Expires=1695600000&Signature=VwBT4mb~nsqoPvjT9yOfyArrsGnhfa94RpCeh8N1~iOHoKXRICKLyvQcniDJ20Cc8~z3w5USXQ370J2-N6k~K-QIVO-k1wOoRbPwruRMjO5B~VvRrXycU8KKAH~SFTF49mmof4YjBBl09yyboh9Fm8tBGJWy1q7fBofu6Zob788onFjgT5W0LCoTZYgVtTT3ulcCY7DTTvJ0-GaDg2ChEXUtNn0jBtfeZ3ekNA~XSTq8UXZX38oT0KMOJBUDHG5E7t9niT3JWtaxVyjprg~ubXkb19BR~0CagAMTY18A8xPmdYGtYgg9FyRI2PHue-CXb6Svce9cR3lUnM14EOKNXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];
const footerLinks = [
  {
    title: "About",
    options: ["HOME", "ABOUT US", "SHOP", "FAQ", "SERVICES", "CONTACT US"],
  },
  {
    title: "Services",
    options: [
      "AGING",
      "ACNE",
      "HAIR LOSS",
      "FAT REDUCTION",
      "PIGMENTATION",
      "ACNE SCAR",
    ],
  },
  {
    title: "Useful Links",
    options: [
      "PAYMENT PLANS",
      "MEMBERSHIP",
      "PRIVACY POLICY",
      "TERMS OF USE",
      "SHIPPING DETAILS",
      "SUPPORT",
      "INFORMATION",
    ],
  },
];
const contact = [
  { src: "/asessts/footer/contact (1).png", mode: "+91 1234567890" },
  { src: "/asessts/footer/contact (2).png", mode: "Loremipsum@gmail.com" },
  {
    src: "/asessts/footer/contact (3).png",
    mode: "XYZ City, 6th Avenue, New Jersey",
  },
];

const contactPage = [
  { icon: <BsTelephoneFill />, mode: "1234567890" },
  { icon: <HiMail />, mode: "Loremipsum@gmail.com" },
  {
    icon: <ImLocation />,
    mode: "905 Watters Creek Boulevard, 141, Allen, Texas, USA",
  },
];

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510271751!2d76.76357017426172!3d28.644287354223533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694055009994!5m2!1sen!2sin";

const ADD_IMG =
  "https://s3-alpha-sig.figma.com/img/98dd/fc2d/f06d62c194cb4ca989bb188bb00bbbf3?Expires=1695600000&Signature=W9XeU~uj-z3drOc3ZIribJ~ADR1bx3S3vgCbHj0nyZTYx2iFDJgjTTOrj3fWeasC0HDYpVIquqx~LWFat1cbQyUjH4ZEzW68XlVkEd21ELWk0-W40HUJ~hHPhh9D0-Tsjw4XLDWadasEuWyfZeO~Pci63ovLncMHW9L7IQbiGl7gYmshZbInznAAP0XdH2Gis2DkAUpzSBZWlH4Aw032Y04YvbGWNg28SFXSbWC49Qs-SQ4ZBPPACBzLyThXFSOXN3pjClb9qqfWvhwxDU1ypDlRWtWyv61nK6AIL57NHMdPowstYuWaS0B-8DylQv7KAf5rDEA0bg0Hja1W4VW1SQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const STAR =
  "https://s3-alpha-sig.figma.com/img/3d9f/2c83/3209c56b12a5ba8749966557500d749e?Expires=1695600000&Signature=D2JHPUMMjWxq~6R5qT8nSrQ3gNlmzK6cHAsLBnc34BPgyPlA-fhNEw9Y~xIOaMsqlGIoiITM1xh9LZhBB7RA6M-2vnKKbRx8FXlyR52z5q7YkmQ5rF8czhhgxj78D4VpbcvkRB17ZA41H7p8gCP-yBuCGG7seID~XBqDOIyM1hm0FMFmEoTuG0OE--WlkZGdp~joN3IkjvfHwx8iKvTZiMPWcuPsLYhk7y-d9ta~XpoLC795OhjTS8Az6xnM-pMAXbA5ClgVY-mOsRicyT-2GvWAcvfg4BOjb8LUnMrWox-R~6ZylCW6LQj8G8Xkl1lb7I16780jeU~50scfGgR6sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const MAP_IMG =
  "https://s3-alpha-sig.figma.com/img/0ba3/f75a/79292454d79968ee69ee7568ab7bb909?Expires=1695600000&Signature=APxMQzC66ya-7DFTgWd4hZH2SsrpK9tp38nOqTxS54B9T7mahAJdAx47IyPg8OpP-Miuzi9TQ00QX7Cezon208ACgb2X4RgIbWmUOVjVI3KETVfi6VEDDSxBl~aARQDqqd3BHe0NC-N-2~lRha-Bd~rh-EAHyIcCmHjCUr09ApRKDLz-aEipjoN1BDbentjmqsNkJnqusWLNb51sDNfa5EE10xVO3BULkp2nZgGBulBgtRwqwvUNsEJ0VpSNfojHdMn12h8SwQu4f4LpFHH~Ml9kI9fedBQ7KnwAyb-Uj6gOyPGl901pQRvuN~e-kLr8re3mbLKKSQIby0TfH84-hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const GOLD_MEDAL =
  "https://s3-alpha-sig.figma.com/img/16c1/2675/c0964da3294f9f7378d69e315d0872ba?Expires=1695600000&Signature=AuBQzDGx9hBr4FDeKAxZxvPCHHcA3TbB-nyEi0dIuRIqwIetHHkmSOQXuQfPbtU6a73Ono40QuZ60rtObZuBI-N6Z2FpMz7dHYFZFCvA-cYO6cMHXyIxoD2h3LcP5cNvAn5u9R4O~KdnkO-lySzIRXVtctV~~4eBjgfm6QgggBBjCjR8~~QqF5AQ50z5lptoNsLzDPrgsa-KFDG8Kljg2-G5Voqmn6Ow0dD4gR8N6iWHaY4F0vjNDdGKRWhZLkvQcwj0Th2I6rlbegPGKfeg4M4h6~E~ijB5qn86NGO9G0IyFLMZrOcvPmNZZqEqwfK6p-cWwt91nPqTx4gGIMGQUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SILVER_MEDAL =
  "https://s3-alpha-sig.figma.com/img/f83f/8116/eb1f3be5d9fd8c225234dc22d43bc1aa?Expires=1695600000&Signature=eXtqPtXkkqC8CD8dJylp20IdvhyxslYEHhSz7p~HAieMcD5affm36H7aJ13JucuyYKJyTdarBMI2SlY3V7FHNV6as9W~OCj2qUKojvtVI-MOWD1NTdruQJJwHLVP0CLB5dMRffNERYjXM5sJ~7offUS5d7wvxapShlkL6Mgc0cgybOoE8AOik99PezhYmS7Pq9RS4oZvmPrSjv3pqdmNULNV67o1AOqbTs2fIKdHET1uBlSj2o3C-o31pC0KWsqO2nL2~pkF5LsI3hMWrjCrgSRo4vhDQOlQQgQCfdRtqiSr3WA3O6fg1W9dMmL-b2cJ4UiQV-K7AGCrbRf-hMr61Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const PLATINUM_MEDAL =
  "https://s3-alpha-sig.figma.com/img/d30a/0549/06b85b99ec2b0e06f10f91a2b73bedfb?Expires=1695600000&Signature=hT3zjiRGN93EtmL5THGK8IwZOBac~eqYfbUTaMeFIq0C2QdtDh~yoE4rJ8IBM4KMiBmNP1hNGFfk379iJivNAYppXIrXOpGsybJGp064Pvi-QYPDB7fkgZU2RW-q0W~2P6Fs8p5soUd6KonZM4a9-P~2XdmZW81aVA-lFkCaI4cguhQpd2ewMxKxi5oqpT9b2BPWpVJMVbY~5nglyC4yqvC2rxejVcK4xDDJzFWDVXTR3DStoAbnwix87wzZS1Gd7aJOqyq89BGO1taKFNbzMXYYMtzm9DexK8XTjkl0tmx1pE3UpZmL1Dmyi1DVs5YPPv4lT6bSpVZIzhmoj3cuww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const DIAMOND_MEDAL =
  "https://s3-alpha-sig.figma.com/img/5206/5754/1695581fd19adf8ecfe70a0b621592b8?Expires=1695600000&Signature=DmbUVREkIPpH5QqpOgSlcKB57uQ7RuL0iCXDTIV-e0nrDqpFZYfLV5Vtp98ywTA0IkYreB9jOSrl-ecoaCZzCLR5YvJePjYp5Q~c7NyxNGPU5JevWERyZ8t-v46mxycHRlgXNHn7cHyt4RCPMZG3Kp0bc9NYgPhnGQv~aehalm9PgS4no3NUD19mmq77E9XXBRe2nM9VH6GfqwrYPyWaImsGq-42ipsTmp5AG1nekdC9xN7eBD2y5L9~P7NniXqw49rhNxib-oCReF0d9OSOZjTWUNcXdY21fCVHFZuzPuG0sd1Rv2z6dYx9Ovfs4pSFplWLpLvhr-KgfIYEBRhGwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const galleryImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1695600000&Signature=GLQ9cIMyuVR~PzbX7vmIsRwQHNXb0M~C~-Qn5IINTBOi0wY6iXnR6bH1ezRUsQf3E8hqiSTULP274k6J1eLFdTjXa00VlJI-5iLFz3xjN22a-jDDpsvMZyzFuaDxTcTijpMwiN0MSt2G1bOdEPrt4rrtPor5Di~ED0IikOxGuhd2GibGUqGcLOTaVe18o7lYUCUtuWVjwDpfViigkVagONB2jouOPZszp7pv6lYuDIhcW0LNk1xnHxw-LGir-8WnVgWl9CDAFdPzeRkMNwMj4vSRMOcRb~h0J6JXd0LSEggZFIxYmvXQCydFGFGixHPDW0fp2GOASB~9NZuJKPTMUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Microneedling",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/7df6/8aca/cbcc438e39909a1787036442e14812b0?Expires=1695600000&Signature=Yx4BYybV1L75PKq2kejLP~0W3uj9JP6sjeXClgwsrzmf9v-tajeyNo8JkHdcIfbLWikqITQik38DGaZ4iWO3Ot-1DFhanRPtknvbE6hqd3OTEV9-pUIZ4ahCjqUjJt9tW1k2uf~eelYu72pQHN94591iU-4hhFgYnWo~i0X4FJ7w8wnBQXpQyLb-ZZnB~g8mtSNiE-XEJpiCp8uHHzhHBNQZIyTlQj5WSNwQ5K7GadW5QqpBd02m-0aTcXcFa1XiHjbVj-XFr4iFT6ttfdnFETxL0TSnm-vr5A6zuBVKaxwwh2oZTqZvUEgWlkTxnUYfMyk3O-glMDHpi7btuaR2JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Jet Facial Treatment",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1e97/8e3b/4c32148303fff071df351690236b69c2?Expires=1695600000&Signature=CDmJjsiJZp84LWXvhYaTenW-1YCiodnElQ6MKoyP0rni853tC5Ny5rFG68KKoRK5Ft8v4yhG17JouLlNIPT4Jz8a3XaPxTn8GImDxMiIwvD9kvitDYyBoQlPlUb54Te6a4DmDP0er-TpuYiXwJawD01oKpI5oCFQVJKWGh8qGx4N-dKf317wipJJTL87j9zUyN4of-vtceXKL19NAfyZ-qIshV5uQqnqPF5c6ebl0GKH~GB5z0dVZ~42O9mlTvHUHs4yDGvwgo7RSpxo8LATrsXJXXhF3MDcxX9eibUY2f3zPfclJjMtvYD4Uwm1I~lMiMzGF8OTUYFCCROY1Buhvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Cosmelan Treatment",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/66f8/4d14/301f45c11f07a57c02c725eeb70f0707?Expires=1695600000&Signature=PAlb-LIGhnyzPR~nP7pTh85JPAX3cjVjzm5iDwq3GoGJxNFAvcBugod7tTgcJyeXpxsZycwKKdXC43ga6WB3x0cogzU7qjp-wJvzfwDjHuftkMLueL3OKBc8GX6SunflWyiJNUdp9kPhUHwa4wY~32sMKRHeUYmUXwB~3VMGiC~nq1PTlF4ShQ6YcmXHjaHUsW3u7kG32dEAKtArc~gVyBlLhnDPrZ9C5vCoZ8IJOn6IpBVczgKg~tKb6PL6pTSwenkw13FLtK1aZo47fpsCsPtnrnBXE0Vc9lgzeoC2MCOQQibAvaryAYvcgKm4hAcSwX2drLN-rIv1cGnsx-E2DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Microneedling",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/cac8/d71c/fe25002a9ed8cc49825e8ee289350281?Expires=1695600000&Signature=GAM4WmJeeXg~YNsppPQWyIP~JEClKyaGztbA6U0maNTShc8yFqxj~s5x6W3auKbfeAMChG8UbPwOqjQARBZgEx-nUyAKjJv3sys7v3JrNJKoB1kLH2APZ-iSj0-XTFrhrP5vg2VBhdENEJF7q6y51rIG4JTgD-681vDqt4y6x-zC~UY2S2hcRQBBkOWRi-OOFMkZ2Hx-Y6Fv4wit8LfD5UP54ntM9MZcHGExhr8J9R9bTUnV2qQ6~snyNbqIV227i59hXD7XVHnboWkzgSxr14zllmgUq4jjfblY-3HzQ7YNLSMGiM23hU0G74qTCuOU65HIVfyfFAURLzsZoatXMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Microneedling",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8622/5b26/1ebcc6a3d73293132764cd2bdbada56c?Expires=1695600000&Signature=HxoLVgRG6gP1bvPS8RTs2BHryEFpDF0i0x8A9PRQ92jzCzGMOwhBsSNIOQpBtsq29lRrhK7fkDbhnBjBuS6L2ajhGg3LtCc7kTCzDYBb3N3IcW0pBLP17FQ67RrdlVdVGmPWt29eLEDvoGFiXPCjaUx~MQFfarQEu8ev--YQVIZSmoScWlWrxPecsfdpmbqhEz4k5KqCcweAdaIZ7x19b1SOhTSnRAPuqA01rFuVuT~F13lMFYu655IRTTlRvACz9jlss6gMN5snk0fVdaIR~uNEWVDlmszhGGtwHGXSU-s5Iw67UQUfcHlyka2kcMIq7OW-MGdSUrSa5BKbJ5-~~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Cosmelan Treatment",
  },
];

const PAYMENT_TYpes = [
  {
    src: "https://s3-alpha-sig.figma.com/img/5a65/12f2/28ccef67e2fb8ee5d9c5a6164c8af649?Expires=1695600000&Signature=ZEzkWTa8eyGD2qBtxN3YXZSnEfePTdGP3ANEFf8cHkyr0bxcXzzhioj9MyLuGRz9wQzff86-TlMnxMcJijVI-iVIgXJSBrF2hw0Dm5guumpnvf2W83HR6t6kaK59liOasW~WaX1RFcaMSG0Tuezqo3X8PJmtUfNr2OeqSZEfbig-mFUDIgs4lWsrL9s6yRrMpDVoiftdHdJrepebsgiZ92ZMiqRlaTKKp6Hmho4wCK-VDzjNcpMSrfYvxkIvEYZGBUrDMS-t4mtqKiEl-JjjsBWHo6-N~THruK25Sp-j1XOpq8HJC9R4C865zJHh3HNPCT4MnssybUIUoldBbqgqBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Quick Applications",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/67d6/e884/c551c1d32d16263b24e2b2efea2a2003?Expires=1695600000&Signature=dLR5Qdh1IZvQh69362RBKofXwuRupAFoZ7AwZ94rb2EuGWd3nIRK5UW20StYds4DI4c6mhuvzX4MCKbiNy6LxWPF6YRBM94eKnhTldqH9LSfznAs6kF0VQkF5nnaaixPHaHEK5j2NZ5j41jzxz7qcXXqr63Bsv1C4RPWjQUXXTjTdb2-r6KnQtz3iwyHz8hdxi~KfbSl8IL9F-VrutL3orirZ~hToGgWJNnoaHOddq6kRzk4pdhXKcEvaGv9ZEQk2teoN50m7hh9yzDzDw9OBVTzysVFiMxxtSlwCmXFxb5olzndVb4T9lx2teWm~TZH2nLet~QqnobKQZWH86OFXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Flexible Payment Options",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/2481/41b0/351fe0efc07da455ad7e11e2e1386290?Expires=1695600000&Signature=AGfYsQPyn0EeSVYWpubi2D60MtY3jTQ6s8DrfgazXvWkimAQCP0zm0aQ-bdQ7ebNYs-d5WqDBmv-DhH~15AgiFZmPE2kqubosw7Q1JwmSpSjoG2TxhgIQrGrOdWy23Cy46EQIJ45Nhl23FL7gUCS1NPBki-bjLwdMqbpFSf1rhF75C~RP~kPLAk0PV8qvSlPMBEpP5Wj8NndgXQEb~DkxHmrei5ZhaiCZqdHrcv-XUWnlJIARFH4QhJzE8GKPjWrcgYTVpa25zYukOz9yYqIBb4DDpZqQrZDbg-PCiwLcd0VnY74bmcO9msdegkpsuXIu~xr~TAwsPaB40TfIH3Etg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "No Hard Credit Check",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/7cdf/39dd/36226ae6544374ca0dd67eab301482c9?Expires=1695600000&Signature=OaYDj73pXxBGDDf9nZ12Wdtm68hrAa9grFqYRTpptDxdBjueDT2Z2Yyv4-hkgYtj~KPYpZ9Vaikqa6rGLrdcmrw1Gc8ohXMaiS6T-rnoArEBUIJBaTbA21RIMDZFs~T9dtR-0hCRDPoQkj-N3cUP5crmdah5X6j4cLwiDjcQdGf2xkGpk3yOOJDwm~SMWtKPAtteT9WqDBGxOvfip8V2rUZd1GUObTgTZLVIUiDMsXre0zHoq43aCSmYlQXaxx8CTE3mx3NXF6vRsSKQ~KKunMBNxQGjcPw7TKzowRv8522UvOYV~rRvDPpYVavlWK1AB4bQcVt2IJFKI077ts~RLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "High Approval Rate",
  },
];

const financialSituation = [
  { icon: <TiTick />, value: "OKAY" },
  {
    icon: <BiSolidLike />,
    value: "GOOD",
  },
  { icon: <PiStarFill />, value: "GREAT" },
];

const testimonials = [
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
];

const SERVICE_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/efd9/806b/22695128354bc21a01db7664dde7431c?Expires=1695600000&Signature=qeDPlcMMtQ0gmydwoHsfbwudAtYnOiBQ2RvJJ2rqygP9SVziIA6yWxKVmkL19KldVRzunAOtcHKuW2XKvFjroaRGnG-uFTCD2cM8mcNXjBBUKZ8wv0L68COJqNm1YFNtkDNymjn9PEowTS2t59SIJCRQfDNO0RcM4B7txIVgK5NXDH67cOoiNWwQDdSMqu8HkrpEykNfAPUO1uwUrxNbof6HLyrLx7KvT2E6rkH~dMCWe1WDc-huVMKidYjM5QVkxkT7eoPtD2imKS6-H2huXeqkgJqyocTyNV4TkvmyW91rIzNmWkZNL8aigdYJopYsJ0decXRUtmUdfUR26HAx1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SHOP_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/268d/24ba/bb48b7bd0d95329554b1742720841d8d?Expires=1696204800&Signature=nat7T8YaCWMkpumh8Qgf6-fDIQEz3f7RttC9cira-fzvYTzelhoFfK5YDiyMnGg-ncpd0cbKgFyRTrdivHcYIaKJfJsHfBiqX~MfSf5JDJnVFyLTdVeOMwKwZSbe1WoxL8HyteWmQDiXgbZfqewZwy5NWMir2hxMV9OkLQh4EbkoTt102nNA93ShDS5KeUfJbC1f8yc0Bl10y76hMrML51SyT-xIQlytCPd8czbiiDJg9I6lHgmeQdSVcJYbPDLbRFT5QvtfE9p3TWzWMRoBNTmJC0z~u4dNNXt391N5xaaTW-4Autu8euTLco8~T15uxJfBMWY96KdQPoQDUmZREg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
export {
  SERVICE_HEAD_IMAGE,
  SHOP_HEAD_IMAGE,
  pictures,
  ServiceCardImages,
  OFFER_IMG,
  partners,
  paymentCards,
  OUR_PRODUCT,
  WHO_WE_ARE,
  latestNews,
  footerLinks,
  contact,
  contactPage,
  MAP_URL,
  ADD_IMG,
  STAR,
  MAP_IMG,
  GOLD_MEDAL,
  SILVER_MEDAL,
  PLATINUM_MEDAL,
  DIAMOND_MEDAL,
  galleryImages,
  PAYMENT_TYpes,
  financialSituation,
  testimonials,
};

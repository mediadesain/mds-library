import { Component } from '@angular/core';

@Component({
  selector: 'mds-string-utils',
  templateUrl: './string-utils.component.html',
  styleUrls: ['./string-utils.component.scss']
})
export class StringUtilsComponent {
import = `
import { MdsStringUtils } from 'medes-ui';`;
demo = `
MdsStringUtils.lowerCase('This Is String') // output this is string
MdsStringUtils.upperCase('this is string') // output THIS IS STRING
MdsStringUtils.titleCase('this is string') // output This Is String
MdsStringUtils.pascalCase('this is string') // output ThisIsString
MdsStringUtils.randomCharacter(20) // output 4n8fkovxnzp8ypaxyk8z (20 character)
MdsStringUtils.convertToSlug('This Url url $string & have symbol@#%') // output this-url-url-string-have-symbol
MdsStringUtils.getYoutubeID('https://www.youtube.com/watch?v=L8Zs8WnLerw') // output L8Zs8WnLerw
MdsStringUtils.getYoutubeEmbed('https://www.youtube.com/watch?v=L8Zs8WnLerw') // output https://www.youtube.com/embed/L8Zs8WnLerw
MdsStringUtils.getYoutubeThumbnail('https://www.youtube.com/watch?v=L8Zs8WnLerw', 'maxresdefault') // output https://i.ytimg.com/vi/L8Zs8WnLerw/maxresdefault.jpg`;

  // constructor() { }


}

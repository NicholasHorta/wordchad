import {EventEmitter} from '@angular/core';
import {Injectable} from '@angular/core';
import {TextLog} from '../../models/text-log.model';
@Injectable()

// Copy the text 
// Store the saved array items and current text according to time, have the option for it



export class TextLogService {
    
    textLogsArray: TextLog[] = [
        {title: 'Shoob', body: 'Distinctio laboriosam iusto deleniti voluptates asperiores, error, sint vero illo eveniet at quos quasi nobis cum est cumque exercitationem voluptatibus ipsa reprehenderit eius a? Consectetur nostrum facere vel tempora nihil perspiciatis, incidunt eum numquam ipsum debitis dolor officia exercitationem pariatur quo architecto quidem placeat dolorem? Maiores voluptates consequuntur doloremque neque, asperiores nihil velit? Animi, numquam.', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'Free Flow'},
        {title: 'Shoob', body: 'Deleniti perspiciatis, labore ipsa soluta dolor recusandae quod nihil excepturi voluptatem aliquam autem ducimus ullam nisi possimus voluptatibus qui ipsam nemo vitae fuga cupiditate eveniet quidem. Atque eum quo reiciendis omnis corporis magni nisi nam, repudiandae optio eaque? Perspiciatis esse repellendus a, tenetur ex enim tempora, reiciendis, in accusantium quisquam cumque! Cupiditate iusto qui aspernatur dolorem deserunt, itaque, quae incidunt provident repudiandae fugiat, soluta est facilis vitae. Quidem sint aut, nemo facilis natus maiores nobis maxime eos nulla perferendis ut iste delectus ipsum tempora voluptatum debitis earum cupiditate eveniet odit, voluptas sed nisi minus dolor. Beatae totam voluptas voluptatum, quo, nostrum aliquam rem eos, unde velit natus dolorem cum eveniet asperiores rerum! Qui quaerat architecto pariatur quis molestiae maiores harum id dicta, ipsam sunt culpa. ', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'UCAS'},
        {title: 'Shoob', body: 'Et id autem alias suscipit, ipsa magnam repellat enim! Maiores, necessitatibus ipsa ut, enim laboriosam minus vitae aperiam quaerat, deserunt nobis sapiente praesentium quae quas dolorem sit repellendus eveniet quam dolores impedit officia. ', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'Twitter'},
        {title: 'Shoob', body: 'In dolore accusamus quis maxime eius totam, ullam laudantium aliquam maiores iusto? Aliquid error aliquam suscipit dolor excepturi fugiat vero nihil tempore reprehenderit culpa assumenda corrupti mollitia magnam omnis sapiente, impedit facilis nulla eum quam libero facere commodi! Aliquam veritatis similique vitae sapiente, consequatur repudiandae ullam nesciunt at qui, magni quisquam corrupti ipsa ipsam possimus vero.', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'SMS'},
        {title: 'Shoob', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia earum labore quod! Molestias deleniti a, voluptas vel incidunt libero non perspiciatis modi! Officia sint modi et, minima ducimus facilis qui ipsam voluptatum illo iste, eligendi velit maiores quia error quos eos enim voluptates consequatur accusantium voluptate rem tempora? Soluta veritatis illo dolorum natus dolor fugit quas consequatur, quam tempore rem debitis eius consectetur. Ducimus nesciunt ipsum consequuntur dolores laboriosam libero soluta similique quisquam error ad, excepturi vitae. Minus magnam quas veniam maxime recusandae dignissimos commodi sequi molestias doloribus minima, error numquam reiciendis incidunt dolore? Ullam eveniet dolorum reiciendis earum deserunt voluptate maxime.', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'Twitter'},
        {title: 'Shoob', body: 'Eligendi, esse voluptatum! Quasi, explicabo. Voluptatibus explicabo dignissimos facere provident libero quo natus excepturi magni dolore, in non maiores optio voluptate sequi sunt voluptates et. Adipisci voluptas veniam assumenda. ', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1, optionId: 'UCAS'},
    ];

    logNew(log: TextLog){
        this.textLogsArray.push(log)
    }

    getExistingArray(){
        return this.textLogsArray
    }

    removeItemFromArray(){

    }
   
}
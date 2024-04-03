import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dyrmowez5',
    api_key: '256659544379438',
    api_secret: 'imCMBQEoA2A9IwvPzlF65quuOnY',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtAs_rFoFBYCfTs3tyLvTSrLU9PN99-ucQ3vobZPFFE4kDcArj2cIZwbk3mrM5LQld8M&usqp=CAU';

        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
           resource_type: 'image'
        });
        // console.log({ cloudResp })

    }, 16000);


    test('debe de retornar null', async () => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect(url).toBe(null);
    }, 16000)

});
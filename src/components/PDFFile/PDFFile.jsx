import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import image from '../../assets/low-sugar-img/sug1.jpg'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "gray",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left:0,
        right: 0,
        textAlign: "center",
        color: "gray"
    }
})

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>

                </Text>
                <Image style={styles.image} src={image} />
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima reprehenderit deleniti necessitatibus reiciendis sed incidunt iusto perferendis eos ipsum nulla illo quibusdam ipsam cum sint quo totam nihil ut, beatae error qui. Dolores quod similique rerum natus magnam? Iusto, voluptatem error repudiandae vel id eveniet rem ex doloremque odio eius cum magnam consectetur aliquid debitis! Dignissimos quas, labore autem optio omnis temporibus ad earum sed similique eos hic blanditiis laboriosam quae voluptatem quasi explicabo molestiae nihil voluptatum culpa eius excepturi. Nostrum eius beatae numquam expedita velit voluptate hic fuga, suscipit quas laborum odit deserunt tenetur atque quos iusto aliquam dolorum modi dolores praesentium veniam. Recusandae aperiam aliquam, dicta praesentium, totam sint facilis assumenda nisi eligendi sapiente cumque quasi quisquam alias placeat ipsa, maiores voluptas consequuntur beatae tempora dolores odio. Sit debitis, harum, unde dignissimos eius numquam fugit id nobis, esse eligendi aspernatur vitae quae laudantium iste quia quisquam similique eum dolorum est perferendis rem. Reprehenderit nobis quidem qui aspernatur dolore recusandae, earum quod, sunt tempore ullam numquam provident sit consequatur reiciendis fugiat ducimus voluptatibus sint eius, fuga velit ipsa voluptas! Ab nisi, fuga cumque blanditiis, sequi aut, ducimus accusamus voluptas sint voluptatem odio placeat voluptatibus! Doloremque eaque dignissimos ad vitae exercitationem consequatur, aliquam neque unde, a corrupti ab distinctio nesciunt illo deleniti labore cumque quaerat! Eligendi quo provident quia magni molestiae fugit architecto velit? Vitae quidem ea aliquid sunt quisquam praesentium qui, ipsam voluptatum ex accusantium. Aliquam quis consectetur illum placeat aut voluptatibus recusandae quas, beatae, voluptates vitae ab dignissimos fuga. Enim natus necessitatibus cupiditate et velit odio. Placeat vero nostrum ipsam ullam dolorem officiis repellat tenetur sequi totam, facere atque sit ratione dignissimos velit beatae aut similique vitae porro maxime facilis iusto iste quo perspiciatis. Eaque recusandae debitis non harum. Ipsam, quis alias eligendi veritatis ratione doloribus eaque mollitia? Voluptates aspernatur necessitatibus minus illo magnam autem dicta assumenda exercitationem eaque consequatur sit quo repellat totam aut perferendis nesciunt laboriosam nam earum, temporibus, mollitia fugit consequuntur. Suscipit a, earum inventore ad quos quasi deserunt, magnam amet debitis eveniet ipsum itaque aperiam ratione explicabo, voluptatum similique sint beatae nobis corporis provident cupiditate? Praesentium repudiandae architecto quaerat aliquam earum repellendus iure quibusdam suscipit, beatae totam nihil eligendi. At molestias deleniti, omnis ipsa assumenda quasi? Labore esse, itaque sequi cupiditate magni dolore quas repellat numquam laboriosam molestias corrupti odio dolor ut. Cupiditate error est molestiae amet sunt sint eius, porro consectetur ipsam.</Text>
                <Text 
                style={styles.pageNumber}
                render={({pageNumber,totalPages})=>`${pageNumber} / ${totalPages}`}
                fixed
                />
            </Page>
        </Document>
    );
};

export default PDFFile;
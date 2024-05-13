import  { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { Payment } from '../interfaces/payment.interface';
const stripe = require('stripe')('sk_test_51P7KS6DmlKBuG7BJYYcYifAyqQnzg0LDoxCmaU5xkBEmqELSygohdASnlFHsqDfFpUAdg3YnvQwBwGiTVsipqZGu00Iabgqjbb')

@Injectable()
export class PaymentsService {
    constructor(
        @Inject('PAYMENT_MODEL')
        private paymentModel: Model<Payment>,
    ) {}

    async create(createPaymentDto: CreatePaymentDto): Promise<{payment: Payment, session: any }> {

        const queriedPayment = await this.paymentModel.findOne({
            paymentId: createPaymentDto.paymentId,
        });

        if (queriedPayment) {
            throw new HttpException('Payment already exists', HttpStatus.BAD_REQUEST);
        }

        const session = await this.makePayment();

        const createdPayment = await this.paymentModel.create({
            timestamp: createPaymentDto.timestamp,
            amount: createPaymentDto.amount,
            status: createPaymentDto.status,
            paymentMethod: createPaymentDto.paymentMethod,
            paymentId: createPaymentDto.paymentId,
            userId: createPaymentDto.userId,
            courseId: createPaymentDto.courseId,
        });

        return { payment : createdPayment, session};
    }

    async findAll(): Promise<Payment[]> {
        const payments = await this.paymentModel.find();
        if(!payments) {
            throw new HttpException('No payments found', HttpStatus.NOT_FOUND);
        }
        return payments;

    }

    async findOne(id: string): Promise<Payment> {
        const payment = await this.paymentModel.findOne({ paymentId: id });
        if(!payment) {
            throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
        }
        return payment;

    }

    async update(id: string, updatePaymentDto: UpdatePaymentDto) {
        const queriedPayment = await this.paymentModel.findOne({ paymentId: id });

        if(!queriedPayment) {
            throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
        }

        const updatedPayment = await this.paymentModel.findOneAndUpdate(
            { paymentId: id },
            {
                timestamp: updatePaymentDto.timestamp,
                amount: updatePaymentDto.amount,
                status: updatePaymentDto.status,
                paymentMethod: updatePaymentDto.paymentMethod,
                paymentId: updatePaymentDto.paymentId,
                userId: updatePaymentDto.userId,
                courseId: updatePaymentDto.courseId,
            },
            { new: true }
        );

        return updatedPayment;
    }

    async remove(id: string) {
        const payment = await this.paymentModel.findOneAndDelete({ paymentId: id });
        if(!payment) {
            throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
        }
        return payment;
    }


    async makePayment() {
        const session = await stripe.checkout.sessions.create({
          line_items: [{ price: 'price_1P7UzdDmlKBuG7BJbxrf3O3n', quantity: 3 }],
          mode: 'payment',
          payment_intent_data: {
            setup_future_usage: 'on_session',
          },
          customer: 'cus_PxPsltvfEkRw0y',
          success_url:
            'http://localhost:5173' +
            '/my-courses',
          cancel_url: 'http://localhost:5173' + '/course',
        });
    
        return session;
      }
      async SuccessSession(Session) {
      console.log(Session);
      }


}
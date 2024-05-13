import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Payment {
    @Prop({ type: Date, default: Date.now })
    timestamp: Date;
  
    @Prop({ type: Number })
    amount: number;
  
    @Prop({ type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' })
    status: string;
  
    @Prop({ type: String })
    paymentMethod: string;
  
    @Prop({ type: String })
    paymentId: string; 
  
    @Prop({ type: String })
    userId: string; 
  
    @Prop({ type: String })
    courseId: string; 
  }

export const PaymentSchema = SchemaFactory.createForClass(Payment);
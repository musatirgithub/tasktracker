# Generated by Django 4.1.7 on 2023-04-05 02:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='task',
            options={'ordering': ('due_time',)},
        ),
    ]
